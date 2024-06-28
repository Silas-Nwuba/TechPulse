import React from "react";

const AsideAdvert = ({ height = "h-[100px]", marginTop = "10px" }) => {
  return (
    <div
      className={`flex mt-10  lg:mt-[${marginTop}] ${height} bg-gray-100 dark:bg-[#2c2c2c] flex-col  relative`}
    >
      <p
        className={` text-center py-3  text-stone-400 dark:text-stone-300 tracking-widest  text-[13px] mb-1 font-medium`}
      >
        Advertisement
      </p>
    </div>
  );
};

export default AsideAdvert;
