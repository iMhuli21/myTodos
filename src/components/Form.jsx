import { Link } from "react-router-dom";

const Form = ({ directTo }) => {
  return (
    <div className="form font-poppins flex flex-col items-center justify-center text-lightBlack mt-[70px]">
      <h1 className="font-shoju text-2xl xl:text-3xl">
        {directTo === "/login" ? "Sign Up" : "Sign In"}
      </h1>
      <form className="w-full flex flex-col items-center justify-center mt-5 gap-5 xl:text-lg">
        <div className="box border border-gray-400 rounded-xl flex flex-col overflow-hidden w-9/12 md:w-6/12 xl:w-4/12">
          <label htmlFor="email" className="text-sm xl:text-lg pl-2 pt-2">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="h-7 pl-2 outline-none text-md"
          />
        </div>
        <div className="box border border-gray-400 rounded-xl flex flex-col overflow-hidden w-9/12 md:w-6/12 xl:w-4/12">
          <label htmlFor="email" className="text-sm xl:text-lg pl-2 pt-2">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-7 pl-2 outline-none text-md"
          />
        </div>

        <button className="bg-green-500 p-2 text-white text-center rounded-md xl:text-xl">
          {directTo === "/login" ? "Create account" : "Login"}
        </button>

        <Link
          to={directTo}
          className="text-sm xl:text-lg hover:border-b-2 hover:border-lightBlack duration-100"
        >
          {directTo === "/login"
            ? "Already have an account"
            : "Don't have an account"}
        </Link>
      </form>
    </div>
  );
};

export default Form;
