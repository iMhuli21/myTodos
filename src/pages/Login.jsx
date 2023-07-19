import NavBar from "../components/NavBar";
import Form from '../components/Form';

const Login = () => {
  return (
    <div>
      <NavBar/>
      <Form directTo="/register"/>
    </div>
  );
};

export default Login;
