import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import Logo from "./Logo";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDarkMode } from "../context/DarkModeContext";
import { TbSunHigh } from "react-icons/tb";
import { RiMoonFill } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";

const Menu = ({ handleShowMenu }) => {
  const homeMatch = useMatch("/home");
  const technologyeMatch = useMatch("/technology");
  const businessMatch = useMatch("/business");
  const gadgetMatch = useMatch("/gadget");
  const appMatch = useMatch("/apps");

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      className={`flex justify-between bg-[#171717] shadow-sm px-2 md:px-5 xl:px-10 w-full items-center z-[20000] transition-opacity duration-300 ease-in-out`}
    >
      <Logo />
      <nav>
        <ul className="md:flex gap-4 xl:gap-[50px] tracking-widest text-[#e0e0e0] relative font-semibold text-[13px] hidden">
          <li
            className={`hover:text-white  transition-all duration-300 hidden lg:block ease-in-out ${
              homeMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"home"}>Home</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              technologyeMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"technology"}>Technology</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              businessMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"business"}>Business</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              gadgetMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"gadget"}>Gadget</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              appMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"apps"}>Apps</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <span className="bg-stone-600 rounded-full p-2 cursor-pointer hidden lg:block">
          <FaMagnifyingGlass className="text-stone-100 dark:text-stone-300 text-xl hidden lg:block cursor-pointer" />
        </span>
        <span
          onClick={() => toggleDarkMode((darkMode) => !darkMode)}
          className="mr-2 hidden lg:block hover:bg-stone-600 rounded-full p-2 cursor-pointer"
        >
          {isDarkMode ? (
            <RiMoonFill className="text-xl cursor-pointer text-stone-100 " />
          ) : (
            <TbSunHigh className="text-xl  text-stone-100" />
          )}
        </span>
        <span className="border border-stone-600  w-10 flex flex-col items-center rounded-sm lg:hidden">
          <HiBars3
            className="text-[32px] cursor-pointer text-stone-300"
            onClick={handleShowMenu}
          />
        </span>
      </div>
    </section>
  );
};
export default Menu;
