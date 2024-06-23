import React, { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import Logo from "./Logo";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../context/DarkModeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbSunHigh } from "react-icons/tb";

const Menu = ({ handleShowMenu, handleCloseMenu }) => {
  const homeMatch = useMatch("/home");
  const technologyeMatch = useMatch("/technology");
  const businessMatch = useMatch("/business");
  const smartphoneMatch = useMatch("/smartphone");
  const gadgetMatch = useMatch("/gadget");
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      className={`flex justify-between bg-[#1e88e5] dark:bg-[#171717] shadow-sm px-2 md:px-5 xl:px-10 w-full items-center z-[20000] transition-opacity duration-300 ease-in-out`}
    >
      <Logo />
      <nav>
        <ul className="md:flex gap-4 xl:gap-[50px] text-stone-100 tracking-widest dark:text-[#e0e0e0] relative font-semibold text-sm hidden">
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              homeMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              technologyeMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"/technology"}>Technology</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              businessMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"/business"}>Business</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              smartphoneMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"/gadget"}>Gadget</NavLink>
          </li>
          <li
            className={`hover:text-white transition-all duration-300 hidden lg:block ease-in-out ${
              gadgetMatch ? "text-white font-semibold" : ""
            }`}
          >
            <NavLink to={"/app"}>Apps</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <span
          onClick={() => toggleDarkMode((darkMode) => !darkMode)}
          className="mr-2"
        >
          {isDarkMode ? (
            <BsFillMoonStarsFill className="text-stone-100 text-xl cursor-pointer dark:text-stone-300 " />
          ) : (
            // <LuMoon className="text-stone-100 text-xl cursor-pointer dark:text-stone-300" />
            <TbSunHigh className="text-stone-100 text-xl cursor-pointer dark:text-stone-300" />
          )}
        </span>
        <FaMagnifyingGlass className="text-stone-100 dark:text-stone-300 text-xl hidden lg:block" />

        {/* <input
          type="text"
          placeholder="Search"
          className="bg-sky-300 dark:bg-[#414040] rounded-md py-2 dark:placeholder:text-stone-200 placeholder:text-white text-sm px-4 text-white focus:outline-none w-full hidden lg:block"
        />
        {showMenu ? (
          <HiXMark
            className="text-[30px] text-slate-50 w-20 dark:text-[#e0e0e0] cursor-pointer ml-[140px] font-bold block "
            onClick={handleCloseMenu}
          />
        ) : (
          <HiBars3
            className="text-[37px] w-20 cursor-pointer dark:text-[#e0e0e0]  block text-slate-50 lg:hidden "
            onClick={handleShowMenu}
          />
        )} */}
      </div>
    </section>
  );
};
export default Menu;
