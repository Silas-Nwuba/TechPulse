import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
const MenuSidebar = ({ setShowMenu }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showCategory, setShowCategory] = useState(false);

  const handleToggle = () => {
    setShowCategory((show) => !show);
  };
  const handleCloseSideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  });

  return (
    <div
      className={`bg-white w-[90%] h-[400px] dark:bg-[#2c2c2c] overflow-y-scroll shadow-sm min-h-screen pt-4 px-5 pb-10 z-[50000] transition duration-300 ease-out fixed top-0`}
    >
      <FaTimes
        className="float-right dark:text-stone-200"
        onClick={handleCloseSideMenu}
      />
      <input
        type="text"
        placeholder="Search"
        className="rounded-md py-2 text-sm px-4  dark:bg-[#3f3f3f] dark:text-stone-300 bg-gray-100 placeholder:text-stone-400  focus:outline-none w-full mt-5"
      />
      <div className="bg-stone-300 dark:text-[#e0e0e0] w-full"></div>
      <nav className="mt-5">
        <ul className=" space-y-6 text-stone-900 dark:text-stone-100 divide-y-2 divide-stone-50 dark:divide-[#3f3f3f]">
          <li className="pt-5">
            <NavLink to={"/"} onClick={handleCloseSideMenu}>
              Home
            </NavLink>
          </li>
          <li className="pt-5">
            <span className="flex justify-between items-center">
              <p>Category</p>
              <div onClick={handleToggle} className="cursor-pointer">
                {showCategory ? (
                  <FaChevronDown className="text-stone-600 dark:text-stone-300 text-sm" />
                ) : (
                  <FaChevronRight className="text-stone-600 text-sm dark:text-stone-300" />
                )}
              </div>
            </span>
            {showCategory && (
              <div className="my-4  transition duration-700 ease-in">
                <ul className="space-y-4 text-stone-500 dark:text-stone-200 text-sm cursor-pointer">
                  <li>
                    <NavLink to={"/technology"} onClick={handleCloseSideMenu}>
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/business"} onClick={handleCloseSideMenu}>
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/gadget"} onClick={handleCloseSideMenu}>
                      Gadget
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/apps"} onClick={handleCloseSideMenu}>
                      Apps
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="pt-5">
            <NavLink to={"/about"} onClick={handleCloseSideMenu}>
              About
            </NavLink>
          </li>
          <li className="pt-5">
            <NavLink to={"/contact"} onClick={handleCloseSideMenu}>
              Contact
            </NavLink>
          </li>
          <li className="pt-5">
            <span className="flex justify-between relative">
              <p>Theme</p>
              <input
                type="checkbox"
                className="toggle"
                id="check"
                checked={darkMode}
                onClick={(show) => toggleDarkMode(!show)}
              />
              <label htmlFor="check"></label>
            </span>
          </li>
          <li className="pt-5">
            <NavLink to={"/advert"} onClick={handleCloseSideMenu}>
              Advertise with us
            </NavLink>
          </li>

          <li className="pt-5">
            <NavLink to={"/privacy"} onClick={handleCloseSideMenu}>
              Privacy police
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MenuSidebar;
