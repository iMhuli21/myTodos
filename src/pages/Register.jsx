import NavBar from "../components/NavBar";
import Form from "../components/Form";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const registerUser = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully created Account, you can now login", options);
    } catch (error) {
      toast.error(`${error.message}`, options);
    }
  };
  return (
    <div>
      <NavBar />
      <Form directTo="/login" onSign={registerUser} />
      <ToastContainer />
    </div>
  );
};

export default Register;
