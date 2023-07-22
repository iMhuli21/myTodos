import { Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {  db } from "../config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { options } from "./Form";
import { FaPen } from "react-icons/fa";

const EditTask = ({ todo }) => {
    
  const [openModal, setOpenModal] = useState(undefined);

  let taskRef = useRef();
  let timestampRef = useRef();
  let taskDateRef = useRef();

  const updateTodoTask = async () => {
    let task = taskRef.current.value;
    let timestamp = timestampRef.current.value;
    let taskDate = taskDateRef.current.value;

    if (task.length === 0 || timestamp.length === 0 || taskDate.length === 0) {
      toast.error("Fields cannot be empty", options);
    } else {
      try {
        const q = doc(db, "Todos", todo.id);

        await updateDoc(q, {
          task,
          timestamp,
          taskDate,
        });

        toast.success("Data has been updated", options);
      } catch (error) {
        toast.error(`Error updating data because ${error.message}`);
      }
    }
  };
  return (
    <>
      <div className="edit-btn bg-gray-200 p-2 rounded hover:bg-opacity-80 hover:cursor-pointer transition-opacity duration-75">
        <FaPen
          className="text-lightBlack xl:text-xl"
          onClick={() => setOpenModal("form-elements")}
        />
      </div>

      <Modal
        show={openModal === "form-elements"}
        popup
        onClose={() => setOpenModal(undefined)}
        className="font-poppins"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="lg:text-2xl xl:text-3xl font-bold text-lightBlack dark:text-white">
              Edit Todo Task
            </h3>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="taskdate"
                  value="Task Date"
                  className="text-lightBlack text-lg"
                />
              </div>
              <TextInput
                id="taskdate"
                required
                type="date"
                ref={taskDateRef}
                sizing="lg"
                defaultValue={todo.data.taskDate}
              />
            </div>

            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="task"
                  value="Task Name"
                  className="text-lightBlack text-lg"
                />
              </div>
              <TextInput
                id="task"
                required
                type="text"
                ref={taskRef}
                sizing="lg"
                placeholder="go to the gym..."
                defaultValue={todo.data.task}
              />
            </div>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="timestamp"
                  value="Task Timestamp"
                  className="text-lightBlack text-lg"
                />
              </div>
              <TextInput
                id="timestamp"
                required
                type="time"
                ref={timestampRef}
                sizing="lg"
                defaultValue={todo.data.timestamp}
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                className="bg-violet-600 font-medium p-3 text-white rounded-lg xl:text-lg"
                onClick={updateTodoTask}
              >
                Update Todo Item
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default EditTask;
