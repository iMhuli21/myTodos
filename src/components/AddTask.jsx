import { Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth, db } from "../config/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { options } from "./Form";

const AddTask = () => {
  const [openModal, setOpenModal] = useState(undefined);
  const [user] = useAuthState(auth);
  let taskRef = useRef();
  let timestampRef = useRef();
  let taskDateRef = useRef();

  const addTodoTask = async () => {
    let task = taskRef.current.value;
    let timestamp = timestampRef.current.value;
    let taskDate = taskDateRef.current.value;
    let taskCompleted = false;

    //check the values if they are empty or not
    if (task.length === 0 || timestamp.length === 0 || taskDate === 0) {
      toast.error("All Fields must be filled in", options);
    } else {
      let data = { userid: user.uid, task, timestamp, taskDate, taskCompleted };

      try {
        await addDoc(collection(db, "Todos"), data);

        toast.success("Successfully created todo item", options);

        //clear inputs
        taskRef.current.value = "";
        timestampRef.current.value = "";
        taskDateRef.current.value = "";
        setOpenModal(undefined);
      } catch (error) {
        toast.error("Error creating todo item", options);
      }
    }
  };
  return (
    <>
      <button
        onClick={() => setOpenModal("form-elements")}
        className="bg-violet-600 font-medium p-2 text-white rounded-lg xl:text-lg"
      >
        Add Task
      </button>
      <Modal
        show={openModal === "form-elements"}
        popup
        onClose={() => setOpenModal(undefined)}
        className="font-poppins"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="xl:text-3xl font-bold text-lightBlack dark:text-white">
              Add Todo Task
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
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                className="bg-green-600 font-medium p-4 text-white rounded-lg xl:text-lg"
                onClick={addTodoTask}
              >
                Create Todo Item
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AddTask;
