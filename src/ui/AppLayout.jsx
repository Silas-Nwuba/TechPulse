import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Footer from "./Footer";
import Menu from "./Menu";
import { OverLay } from "./OverLay";
import MenuSidebar from "./MenuSidebar";
import HorizontalAd from "./HorizontalAd";

const AppLayout = () => {
  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("../hook/useServiceWorker")
  //     .then((reg) => {
  //       console.log("Service worker registered  with", reg.scope);
  //     })
  //     .catch((err) => console.log("service worker registration failed", err));
  // }

  // useEffect(() => {
  //   if ("Notification" in window) {
  //     Notification.requestPermission().then((res) => {
  //       if (res === "granted") console.log("granted");
  //       else console.log("not granted!");
  //     });
  //   }
  // }, []);

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
  return (
    <div className="flex min-h-screen flex-col">
      <header className="item-center flex justify-center lg:justify-between dark:border-b-[#333333] border-2 border-t-0  border-r-0 border-l-0 border-b-stone-200 md:border-b-stone-100 py-4 lg:px-10">
        <nav>
          <ul className="flex gap-4 text-[13px] font-medium text-stone-500 dark:text-[#e0e0e0]">
            <li
              className={`hidden lg:flex items-center gap-1 transition-all hover:text-[#007bff] dark:hover:text-[#eeeeee]`}
              onClick={handleNavigation}
            >
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li
              className={`hidden transition-all dark:hover:text-[#eeeeee] lg:block ${
                aboutMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li
              className={`hidden transition-all dark:hover:text-[#eeeeee] lg:block ${
                contactMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>

            <li
              className={`hidden transition-all dark:hover:text-[#eeeeee] lg:block ${
                privacyMatch
                  ? "font-semibold text-[#1e88e5] dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/privacy"}>Privacy police</NavLink>
            </li>
            <li
              className={`hidden transition-all dark:hover:text-[#eeeeee] lg:block ${
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
                  <li className="transition-all">
                    <NavLink>Home</NavLink>
                  </li>
                  <li className="transition-all">
                    <NavLink>About</NavLink>
                  </li>
                  <li className="transition-all">
                    <NavLink>Contact</NavLink>
                  </li>
                  <li className="transition-all">
                    <NavLink>Privacy police</NavLink>
                  </li>
                  <li className="transition-all">
                    <NavLink vLink>Advertise with us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </nav>
        <span className="mr-4 xl:mr-0">
          <ul className="flex cursor-pointer gap-3 md:gap-3">
            <li>
              <Link>
                <FaFacebookSquare className="text-2xl text-sky-600 transition-all duration-200" />
              </Link>
            </li>
            <li>
              <FaSquareXTwitter className="text-2xl text-black transition-all duration-200 dark:text-stone-300" />
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
      <HorizontalAd
        backgroundColor={"md:bg-gray-100 bg-gray-50 dark:bg-[#2c2c2c] "}
      />
      <Menu
        handleShowMenu={handleShowMenu}
        handleCloseMenu={handleCloseMenu}
        showMenu={showMenu}
        showNav={showNav}
      />
      {showMenu && <MenuSidebar setShowMenu={setShowMenu} />}
      {showMenu && <OverLay />}
      <main className="mx-auto mb-10 mt-10 min-h-screen w-[95%] md:w-[95%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default AppLayout;
