import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const AddTask = () => {
  let [openModal, setOpenModal] = useState(undefined);
  let [task, setTask] = useState("");
  let [timestamp, setTimestamp] = useState("");
  let [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button
        className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition-all duration-300 outline-none xl:text-lg"
        onClick={() => setOpenModal("dismissible")}
      >
        Add Task
      </button>
      <Modal
        dismissible
        show={openModal === "dismissible"}
        onClose={() => setOpenModal(undefined)}
        className="font-poppins "
      >
        <Modal.Header>
          <span className="font-bold xl:text-2xl ">Add Task</span>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="box border border-gray-400 rounded-xl flex flex-col overflow-hidden w-full ">
              <label htmlFor="date" className="text-sm xl:text-lg pl-2 pt-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="h-7 pl-2 outline-none text-md border-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="box border border-gray-400 rounded-xl flex flex-col overflow-hidden w-full">
              <label htmlFor="task" className="text-sm xl:text-lg pl-2 pt-2">
                Task Name
              </label>
              <input
                type="text"
                name="task"
                id="task"
                className="h-7 pl-2 outline-none text-md border-none"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="box border border-gray-400 rounded-xl flex flex-col overflow-hidden w-full">
              <label htmlFor="timestamp" className="text-sm xl:text-lg pl-2 pt-2">
                Task Timestamp
              </label>
              <input
                type="time"
                name="timestamp"
                id="timestamp"
                className="h-7 pl-2 outline-none text-md border-none"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center justify-center w-full">
          <button className="bg-green-500 p-2 rounded-lg text-white text-center w-9/12">Create Todo Item</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTask;
