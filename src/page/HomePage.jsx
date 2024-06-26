import React, { useEffect } from "react";
import Main from "../ui/Main";
import Aside from "../ui/Aside";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "TechPulse: Tech to the world";
    return () => {
      document.title = "TechPulse - Tech to the world";
    };
  }, []);
  return (
    <div className="mb-10 block gap-5 xl:flex mt-10 min-h-screen">
      <div className="w-[100%] xl:w-[65%]">
        <Main />
      </div>
      <div className="w-px bg-gray-200 hidden xl:block dark:bg-[#2c2c2c] mt-10"></div>
      <div className="w-full xl:w-[35%] flex-1">
        <Aside />
      </div>
    </div>
  );
};
export default HomePage;
