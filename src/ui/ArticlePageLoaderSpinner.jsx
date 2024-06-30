import React from "react";

const ArticlePageLoaderSpinner = () => {
  return (
    <div className="space-y-6 flex-1">
      <div className="space-y-4">
        <div className=" rounded-3xl animate-pulse w-full h-3"></div>
        <div className="dark:bg-[#525151] bg-gray-200  rounded-xl animate-pulse w-[70%] h-3"></div>
      </div>
      <div className="dark:bg-[#525151] bg-gray-200 rounded-sm animate-pulse w-full h-60"></div>
      <div className="mt-10 space-y-2">
        <div className="dark:bg-[#525151] bg-gray-200 rounded-xl animate-pulse w-[80%] h-3"></div>
        <div className="dark:bg-[#525151] bg-gray-200 rounded-xl animate-pulse w-[80%] h-3"></div>
      </div>
    </div>
  );
};

export default ArticlePageLoaderSpinner;
