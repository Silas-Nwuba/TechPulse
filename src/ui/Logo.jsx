import React from "react";
import { FaTimes } from "react-icons/fa";
import { HiOutlineBars2, HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      {/* <FaTimes className="text-[28px] w-20 cursor-pointer font-semibold hidden" /> */}
      <Link to={"/home"} className="flex items-center">
        {/* <img src="\image\logo 2.png" alt="logo" className="w-[30px] h-[30px]" /> */}
        <h1
          to={"/"}
          className="font-semibold text-2xl lg:text-2xl font-sans dark:text-stone-100  text-stone-100  text-center px-2 py-5  tracking-widest"
        >
          TechPulse
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
