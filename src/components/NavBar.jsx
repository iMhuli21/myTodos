import Logo from "../assets/icon.svg";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

const NavBar = ({ page }) => {
  return (
    <nav className="flex items-center font-poppins text-lightBlack font-extrabold relative gap-3 sm:gap-20 lg: justify-between">
      <div className="logo flex items-center w-8/12">
        <img src={Logo} alt="logo" className="w-4/12 md:w-2/12" />
        <span className="text-lg lg:text-2xl">
          myTod<span className="text-lightBlue">os</span>
        </span>
      </div>

      <span className={page === "home"? "font-normal hover:border-b-2 hover:border-b-lightBlack transition-all duration-100 lg:pr-5 lg:text-md cursor-pointer" : "hidden"} onClick={()=> signOut(auth)}>Log Out</span>
    </nav>
  );
};

export default NavBar;
