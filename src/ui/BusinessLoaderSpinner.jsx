import React from "react";

const BusinessLoaderSpinner = () => {
  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10`}>
        <div className="space-y-4">
          <div className="w-full h-[250px] skeleton rounded-md dark:bg-[#525151] bg-stone-100  animate-pulse"></div>
          <div className="space-y-2 w-full">
            <div className="w-[100%] lg:max-w-[250px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[90%] lg:max-w-[220px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[80%] lg:max-w-[190px] h-[14px] dark:bg-[#525151] bg-stone-100   animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-[250px] dark:bg-[#525151] bg-stone-100 rounded-md"></div>
          <div className="space-y-2  w-full">
            <div className="w-[100%] lg:max-w-[250px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[90%] lg:max-w-[220px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[80%] lg:max-w-[190px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-[250px] dark:bg-[#525151] bg-stone-100 rounded-md"></div>
          <div className="space-y-2  w-full">
            <div className="w-[100%] lg:max-w-[250px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[90%] lg:max-w-[220px] h-[14px] dark:bg-[#525151]  bg-stone-100  animate-pulse rounded-md"></div>
            <div className="w-[80%] lg:max-w-[190px] h-[14px] dark:bg-[#525151] bg-stone-100  animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessLoaderSpinner;
