import React from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPostDate } from "../util/helper";
// import useGetAllComment from "../feature/comment/useGetAllComment";

const LatestPostContent = ({ data }) => {
  // const { data: comment } = useGetAllComment();
  return (
    <div className="flex flex-col mt-6 space-y-2 divide-y dark:divide-[#2c2c2c]">
      {data.map((data) => (
        <div key={data?.id} className="pt-5">
          <Link
            to={`/${
              data?.category.charAt(0).toLowerCase() + data?.category.slice(1)
            }/article/${data?.id}`}
            className="flex gap-3"
          >
            <img
              src={`${data?.image}`}
              alt=""
              className="w-[100px] h-[100px] hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
            />

            <span>
              <h1 className="text-[14px] focus:text-[#007bff] text-stone-600 font-semibold  dark:text-[#e0e0e0] transition-all cursor-pointer">
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
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPostContent;
