import React from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPostDate } from "../util/helper";

const AppPostContent = ({ data }) => {
  return (
    <div className="mt-5 space-y-2 divide-y dark:divide-[#2c2c2c]">
      {data?.slice(0, 7).map((data) => (
        <Link
          to={`/${
            data?.category.charAt(0).toLowerCase() + data?.category.slice(1)
          }/article/${data?.id}`}
          className="flex gap-3 mt-5 py-5"
          key={data?.id}
        >
          <img
            src={data?.image}
            alt={data?.title}
            className="w-[100px] h-[100px] hover:opacity-70 cursor-pointer transition-transform duration-300 ease-in-out"
          />
          <div className="space-y-1">
            <h1 className="text-sm text-stone-600  dark:text-[#e0e0e0] font-semibold  transition-all cursor-pointer">
              {data?.title}
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] dark:text-stone-300 text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">{data?.author}</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300">
                <FaClock className="text-stone-400" />
                <span>{formatPostDate(data?.createdDate)}</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300 gap-1">
                <FaComment className="text-stone-400" />
                <span>0</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AppPostContent;
