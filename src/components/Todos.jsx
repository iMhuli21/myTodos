import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { options } from "./Form";
import Todo from "./Todo";
import { v4 } from "uuid";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [user] = useAuthState(auth);
  let todoItems = [];

  const getData = async () => {
    if (user) {
      try {
        const get = query(
          collection(db, "Todos"),
          where("userid", "==", user.uid)
        );

        const snapshot = onSnapshot(get, (snap) => {
          todoItems = [];

          snap.forEach((todo) => {
            let document = {
              id: todo.id,
              data: todo.data(),
            };
            todoItems.push(document);
          });
          setTodos(todoItems);
        });
      } catch (error) {
        toast.error(`Error getting todos because ${error.message}`, options);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [user]);
  return (
    <div className="todo-container flex flex-col items-center justify-center bg-gray-100 mx-auto mt-10 rounded gap-3 p-3">
      {todos.length === 0
        ? "No tasks available..."
        : todos.map((todo) => <Todo task={todo} key={v4()} />)}

      <ToastContainer />
    </div>
  );
};

export default Todos;
