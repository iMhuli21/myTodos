import AddTask from "../components/AddTask";
import NavBar from "../components/NavBar";
import Todo from "../components/Todo";
import { auth } from "../config/firebaseConfig";
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

const Home = () => {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  if(user){
    return (
      <div className="home font-poppins text-lightBlackmd:w-9/12 xl:w-7/12 mx-auto pb-10 p-2 sm:p-4">
        <span className="flex justify-center mt-2 text-sm hover:text-lightBlue transition-colors duration-300 hover:cursor-pointer pb-8 xl:text-md 2xl:text-lg">
          {user.email}
        </span>
       <NavBar page="home"/>
       
        <div className="controls flex items-center justify-between gap-10 mt-6 px-4 ">
          <AddTask/>
          <select name="status" id="status" className="bg-gray-100 p-2 max-w-5/12 border-gray-300 border rounded outline-none xl:text-lg">
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
  
        <div className="todo-container flex flex-col items-center justify-center bg-gray-100 mx-auto mt-10 rounded gap-3 p-3">
            <Todo/>
            <Todo/>
            <Todo/>
        </div>
      </div>
    );
  }
  else{
      navigate("/login");
  }
  
};

export default Home;
