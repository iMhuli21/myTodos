import { FaPen, FaTrash } from "react-icons/fa";
import {BsCardChecklist} from "react-icons/bs";

const Todo = () => {
  return (
    <div className="todo bg-white shadow rounded p-2 flex items-center gap-2 w-full justify-between">
      <div className="flex items-center gap-3">
        <BsCardChecklist className="hidden sm:text-2xl sm:text-red-500 sm:block"/>
        <div className="details flex flex-col text-lightBlack">
          <span className="font-semibold xl:text-lg">Create a react app</span>
          <span className="text-sm xl:text-md">11/06/2023, 09:00 AM</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mr-3">
        <div className="edit-btn bg-gray-200 p-2 rounded hover:bg-opacity-80 hover:cursor-pointer transition-opacity duration-75">
          <FaPen className="text-lightBlack xl:text-xl" />
        </div>
        <div className="delete-btn bg-gray-200 p-2 rounded hover:bg-opacity-80 hover:cursor-pointer transition-opacity duration-75 ">
          <FaTrash className="text-lightBlack xl:text-xl hover:text-red-600 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
