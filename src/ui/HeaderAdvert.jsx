import React from "react";
const HeaderAdvert = ({ marginTop, backgroundColor, height }) => {
  return (
    <div
      className={`px-3 ${marginTop} ${backgroundColor} h-[90px]  relative  w-[90%] md:w-[60%] my-10 mx-auto`}
    >
      <p className=" py-2 dark:text-[#b0b0b0]  text-stone-400  text-[12px] mb-1 tracking-widest font-medium absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Advertisement
      </p>
    </div>
  );
};
export default HeaderAdvert;
