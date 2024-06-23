import { htmlToText } from "html-to-text";
import React from "react";
import { Link } from "react-router-dom";

const BusinessContent = ({ data }) => {
  return (
    <Link
      to={`/${
        data.category.charAt(0).toLowerCase() + data.category.slice(1)
      }/article/${data.id}`}
      className="space-y-2"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-[250px] max-w-full max-h-full hover:opacity-70 cursor-pointer pb-3 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-[15px] text-stone-800 font-semibold dark:text-[#dbd9d9] transition-all cursor-pointer">
        {data.title}
      </h1>
      {/* <p className="text-sm text-stone-800">{htmlToText(data?.summary)}</p> */}
    </Link>
  );
};

export default BusinessContent;
