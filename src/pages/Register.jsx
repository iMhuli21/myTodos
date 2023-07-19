import NavBar from "../components/NavBar";
import Form from '../components/Form';

const Register = () => {
  return (
    <div>
      <NavBar/>
      <Form directTo="/login"/>
    </div>
  );
};

export default Register;
