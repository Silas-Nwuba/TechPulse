import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <Link to={"/home"} className="flex items-center">
        {/* <img src="\logo 1.png" alt="logo" className="w-[30px] h-[30px]" /> */}
        <h1
          to={"/"}
          className="font-bold text-2xl lg:text-2xl font-sans dark:text-stone-100  text-stone-100  text-center px-2 py-5  tracking-widest"
        >
          TechPulse
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
