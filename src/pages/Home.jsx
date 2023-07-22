import NavBar from "../components/NavBar";
import Todos from "../components/Todos";
import AddTask from "../components/AddTask";
import { auth } from "../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="home font-poppins text-lightBlack md:w-9/12 xl:w-7/12 mx-auto pb-10 p-2 sm:p-4">
        <span className="flex justify-center mt-2 text-sm hover:text-lightBlue transition-colors duration-300 hover:cursor-pointer pb-8 xl:text-md 2xl:text-lg">
          {user.email}
        </span>
        <NavBar page="home" />
        <div className="controls flex items-center justify-between gap-10 mt-6 px-4 ">
          <AddTask />
        </div>
        <Todos />
      </div>
    );
  } else {
    navigate("/login");
  }
};

export default Home;
