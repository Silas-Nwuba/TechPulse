import React from "react";
const TechLoaderSpinner = () => {
  return (
    <div className="block lg:flex gap-6 mt-10">
      <div className="h-[300px] lg:h-[310px] w-full rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
      <div className="space-y-5 mt-5 lg:mt-0">
        <div className="flex lg:flex gap-3">
          <div className="w-[120px] lg:w-[150px] h-[70px] lg:h-[90px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse flex-shrink-0"></div>
          <div className="space-y-2 w-full">
            <div className="w-full  h-[16px] rounded-md lg:w-[300px] dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] rounded-md lg:w-[300px] dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] rounded-md lg:w-[300px] dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
          </div>
        </div>
        <div className="flex lg:flex gap-3">
          <div className="w-[120px] lg:w-[150px] h-[70px] lg:h-[90px] dark:bg-[#525151] bg-stone-100 animate-pulse rounded-md flex-shrink-0"></div>
          <div className="space-y-2 w-full">
            <div className="w-full  h-[16px] lg:w-[300px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] lg:w-[300px]  rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] lg:w-[300px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
          </div>
        </div>
        <div className="flex lg:flex gap-3">
          <div className="w-[120px] lg:w-[150px] h-[70px] lg:h-[90px] dark:bg-[#525151] bg-stone-100 animate-pulse rounded-md flex-shrink-0"></div>
          <div className="space-y-2 w-full">
            <div className="w-full  h-[16px] lg:w-[300px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] lg:w-[300px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
            <div className="w-full  h-[16px] lg:w-[300px] rounded-md dark:bg-[#525151] bg-stone-100 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechLoaderSpinner;
