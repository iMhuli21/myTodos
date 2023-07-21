import NavBar from "../components/NavBar";
import Form from "../components/Form";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { options } from "../components/Form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();

  const loginUser = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/home");
    } catch (error) {
      toast.error(`Error logging in because ${error.message}`, options);
    }
  };
  return (
    <div>
      <NavBar />
      <Form directTo="/register" onSign={loginUser} />
      <ToastContainer />
    </div>
  );
};

export default Login;
