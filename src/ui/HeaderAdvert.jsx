import React from "react";
const HeaderAdvert = ({ marginTop, backgroundColor, height }) => {
  return (
    <div
      className={`px-3 ${marginTop} ${backgroundColor} h-[100px] dark:text-[#b0b0b0] relative`}
    >
      <p className=" py-2 dark:text-stone-300 text-stone-400  text-sm mb-1 tracking-widest font-medium absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Advertisement
      </p>
    </div>
  );
};
export default HeaderAdvert;
