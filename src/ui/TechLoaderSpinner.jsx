import React from "react";
const TechLoaderSpinner = () => {
  return (
    <div className="block lg:flex gap-6 mt-10">
      <div>
        <div className="h-[300px] lg:h-[300px] w-full lg:w-[420px] rounded-md dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
        <div className="space-y-3 mt-4">
          <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
          <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
          <div className="w-[50%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-5 mt-5 lg:mt-0 w-full">
        <div className="block lg:flex gap-3">
          <div className="w-full lg:w-[150px] h-[300px] lg:h-[90px] rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 mt-5 lg:mt-0 w-full">
            <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[80%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[50%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="block  lg:flex gap-3">
          <div className="w-full lg:w-[150px] h-[300px] lg:h-[90px] rounded-md dark:bg-[#525151] bg-gray-300 animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 w-full mt-5">
            <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[50%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="block lg:flex gap-3">
          <div className="w-full lg:w-[150px] h-[300px] lg:h-[90px] rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 w-full mt-5">
            <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[90%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
            <div className="w-[50%] h-3 rounded-sm dark:bg-[#525151] bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechLoaderSpinner;
