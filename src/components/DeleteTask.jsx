import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { db } from "../config/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { options } from "./Form";

const DeleteTask = ({ todo }) => {
  const [openModal, setOpenModal] = useState(undefined);

  const deleteTodoTask = async () => {
    try {
      const q = doc(db, "Todos", todo.id);

      await deleteDoc(q);

      toast.success("Todo Task has been deleted", options);
    } catch (error) {
      toast.error(`Error in trying to delete task ${error.message}`);
    }
  };
  return (
    <>
      <div className="delete-btn bg-gray-200 p-2 rounded hover:bg-opacity-80 hover:cursor-pointer transition-opacity duration-75 ">
        <FaTrash
          className="text-lightBlack xl:text-xl hover:text-red-600 transition-colors duration-300"
          onClick={() => setOpenModal("pop-up")}
        />
      </div>
      <Modal
        show={openModal === "pop-up"}
        size="md"
        popup
        onClose={() => setOpenModal(undefined)}
        className="font-poppins"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Todo Task?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteTodoTask}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DeleteTask;
