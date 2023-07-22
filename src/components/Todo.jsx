import { FaPen, FaTrash } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import {doc, updateDoc} from "firebase/firestore";
import {auth, db} from "../config/firebaseConfig";
import {ToastContainer, toast} from "react-toastify";
import {options} from "./Form";
import { useAuthState } from "react-firebase-hooks/auth";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const Todo = ({ task}) => {

  const [user] = useAuthState(auth);

  const doubleClickHandler = async (e) => {
    if (e.target.classList.contains("todo")) {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");

        try {
          const q = doc(db, "Todos", task.id)

          await updateDoc(q, {
            taskCompleted :false
          });

          toast.success("Task Completed", options);

        } catch (error) {
          toast.error(`Error updating task because ${error.message}`, options);
        }
        
      } else {
        e.target.classList.add("active");
        try {
          const q = doc(db, "Todos", task.id)

          await updateDoc(q, {
            taskCompleted :true
          });

          toast.success("Task Completed", options);

        } catch (error) {
          toast.error(`Error updating task because ${error.message}`, options);
        }
      }
    } else {
      const parentEl = e.target.parentElement.parentElement.parentElement;

      if (parentEl.classList.contains("active")) {
        parentEl.classList.remove("active");
        try {
          const q = doc(db, "Todos", task.id)

          await updateDoc(q, {
            taskCompleted :false
          });

          toast.success("Task Completed", options);

        } catch (error) {
          toast.error(`Error updating task because ${error.message}`, options);
        }
      } else {
        parentEl.classList.add("active");

        try {
          const q = doc(db, "Todos", task.id)

          await updateDoc(q, {
            taskCompleted :true
          });

          toast.success("Task Completed", options);

        } catch (error) {
          toast.error(`Error updating task because ${error.message}`, options);
        }
      }
    }
  };
  return (
    <div
      className={
        task.data.taskCompleted === true
          ? "todo bg-white shadow rounded p-2 flex items-center w-full justify-between select-none active"
          : "todo bg-white shadow rounded p-2 flex items-center w-full justify-between select-none"
      }
      onDoubleClick={doubleClickHandler}
    >
      <div className="flex items-center gap-3">
        <BsCardChecklist className="hidden sm:text-2xl sm:text-red-500 sm:block" />
        <div className="details flex flex-col text-lightBlack">
          <span className="font-semibold xl:text-lg">{task.data.task}</span>
          <span className="text-sm xl:text-md">
            {task.data.taskDate}, {task.data.timestamp}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mr-3">
        <EditTask todo={task}/>
        <DeleteTask todo={task}/>
        <ToastContainer/>
      </div>
      
    </div>
  );
};

export default Todo;
