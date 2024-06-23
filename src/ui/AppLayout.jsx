import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Menu from "./Menu";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import { HiBars3, HiChevronDown } from "react-icons/hi2";
import MenuSidebar from "./MenuSidebar";
import HorizontalAd from "./HorizontalAd";
// import AdvertModal from "./AdvertModal";

const AppLayout = () => {
  // const { error } = useGetAllComment();
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const homeMatch = useMatch("/home");
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/contact");
  const privacyMatch = useMatch("/privacy");
  const advertMatch = useMatch("/advert");

  const handleNavigation = () => {
    setShowNav((open) => !open);
    if (showMenu) setShowNav(false);
  };
  const handleShowMenu = () => {
    setShowMenu(true);
    if (!showMenu) setShowNav(false);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
    if (showMenu) setShowNav(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (error) {
  //   return <NotFoundError />;
  // }
  return (
    <div className="flex min-h-screen flex-col">
      <header className="item-center flex justify-between dark:bg-[#000000] bg-slate-50 py-4 lg:px-10">
        <nav>
          <HiBars3
            className="text-[32px] w-20 cursor-pointer dark:text-[#e0e0e0]  block text-stone-600 lg:hidden"
            onClick={handleShowMenu}
          />

          <ul className="flex gap-4 text-[13px] font-medium text-stone-600 dark:text-[#e0e0e0]">
            <li
              className={`hidden lg:flex items-center gap-1 transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee] ${
                homeMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
              onClick={handleNavigation}
            >
              <NavLink to={"/"}>Home</NavLink>
              {/* <HiChevronDown className="mt-1 block lg:hidden" /> */}
            </li>
            <li
              className={`hidden transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee] lg:block ${
                aboutMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li
              className={`hidden transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee] lg:block ${
                contactMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>

            <li
              className={`hidden transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee] lg:block ${
                privacyMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/privacy"}>Privacy police</NavLink>
            </li>
            <li
              className={`hidden transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee] lg:block ${
                advertMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/privacy"}>Advertise with us</NavLink>
            </li>
          </ul>
          {showNav && (
            <div className="absolute z-[60000] mt-2 block bg-stone-600 px-5 py-3 shadow-sm transition-all duration-300 ease-in-out xl:hidden">
              <nav>
                <ul className="block space-y-5 text-[13px] font-medium text-white">
                  <li className="transition-all hover:text-[#007bff]">
                    <NavLink>Home</NavLink>
                  </li>
                  <li className="transition-all hover:text-[#007bff]">
                    <NavLink>About</NavLink>
                  </li>
                  <li className="transition-all hover:text-[#007bff]">
                    <NavLink>Contact</NavLink>
                  </li>
                  <li className="transition-all hover:text-[#007bff]">
                    <NavLink>Privacy police</NavLink>
                  </li>
                  <li className="transition-all hover:text-[#007bff]">
                    <NavLink vLink>Advertise with us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </nav>
        <span className="mr-4 xl:mr-0">
          <ul className="flex cursor-pointer gap-2 md:gap-3">
            <li>
              <Link>
                <FaFacebookSquare className="text-2xl text-sky-600 transition-all duration-200" />
              </Link>
            </li>
            <li>
              <FaTwitterSquare className="text-2xl text-sky-500 transition-all duration-200" />
            </li>
            <li>
              <FaWhatsappSquare className="text-2xl text-green-600 transition-all duration-200" />
            </li>
            <li>
              <FaGooglePlusSquare className="text-2xl text-red-600 transition-all duration-200" />
            </li>
          </ul>
        </span>
      </header>
      <Menu
        handleShowMenu={handleShowMenu}
        handleCloseMenu={handleCloseMenu}
        showMenu={showMenu}
        showNav={showNav}
      />

      {showMenu && <MenuSidebar setShowMenu={setShowMenu} />}
      <div className="w-full bg-gray-50 dark:bg-[#414040]  px-3 py-10">
        <HorizontalAd />
      </div>
      <main className="mx-auto mb-10 mt-10 min-h-screen w-[95%] md:w-[98%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default AppLayout;
