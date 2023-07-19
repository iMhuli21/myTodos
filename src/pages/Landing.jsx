import NavBar from "../components/NavBar";
import speedometer from "../assets/speedometer-icon-png-19.jpg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="p-2">
        <NavBar/>

        <div className="main-text flex flex-col mt-60 sm:mt-[120px] items-center gap-5" >
            <div className="flex items-center justify-center gap-2">
                <img src={speedometer} alt="speedometer icon" className="w-2/12 pl-2" />
                <p className="font-shoju text-lightBlack text-lg sm:text-2xl xl:text-3xl"><span className="text-red-700">Boost</span> your productivity with <br/>mytod<span className="text-lightBlue">os</span></p>
            </div>
            <p className="font-poppins text-lightBlack text-center xl:text-lg"><span className="text-lime font-shoju text-lg xl:text-2xl">Unleash</span> the Power of Efficient Organization</p>
            <Link to="/register" className="bg-lime sm:text-lg font-poppins rounded-md p-2 text-white w-5/12 xl:w-3/12 2xl:w-2/12 text-center">Get Started</Link>
        </div>
    </div>
  )
};

export default Landing;
