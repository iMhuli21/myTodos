import Logo from "../assets/icon.svg";

const NavBar = ({ page }) => {
  return (
    <nav className="flex items-center font-poppins text-lightBlack font-extrabold relative">
      <img src={Logo} alt="logo" className="w-4/12 md:w-2/12 xl:w-1/12" />
      <span className="text-lg lg:text-2xl">
        myTod<span className="text-lightBlue">os</span>
      </span>

    </nav>
  );
};

export default NavBar;
