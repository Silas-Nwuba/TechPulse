import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatPostDate } from "../util/helper";
import { FaCalendarCheck, FaComment } from "react-icons/fa";
const TechnologyContent = ({ data }) => {
  return (
    <div className="block lg:flex gap-6 mt-10">
      {data?.slice(0, 1).map((data) => {
        return (
          <Link
            to={`/${
              data.category.charAt(0).toLowerCase() + data.category.slice(1)
            }/article/${data.id}`}
            className="relative w-[900px] h-[420px] "
            key={data.id}
          >
            <img
              src={data.image}
              alt={data.title}
              className=" w-full h-[430px] cursor-pointer"
            />
            <span className="mx-4">
              <h1 className="text-xl text-stone-800 dark:text-[#ece8e8] font-semibold cursor-pointer">
                {data.title}
              </h1>
              <div className="flex gap-3 pt-3 font-medium">
                <div className="flex items-center text-stone-500 dark:text-stone-300 text-[11px] gap-1">
                  <FaUser />
                  <span className="text-[11px] z-[20000]">{data.author}</span>
                </div>
                <div className="flex gap-1 items-center text-[11px] dark:text-stone-300 text-stone-500 ">
                  <FaCalendarCheck />
                  <span>{formatPostDate(data.createdDate)}</span>
                </div>
              </div>
            </span>
          </Link>
        );
      })}
      <span className="space-y-8 xl:mt-0 ">
        {data?.slice(1, 6).map((data) => {
          return (
            <Link
              to={`/${
                data?.category.charAt(0).toLowerCase() + data?.category.slice(1)
              }/article/${data?.id}`}
              className="block lg:flex gap-5 mt-3 xl:mt-0"
              key={data?.id}
            >
              <img
                src={data?.image}
                alt={data?.title}
                className="object-fit w-full lg:w-[120px] h-[250px] lg:h-[91px] hover:opacity-70 cursor-pointer transition-transform duration-300 ease-in-out"
              />
              <div className=" mt-4 lg:mt-0">
                <h1 className="text-[16px] text-stone-800 font-semibold dark:text-[#dbd9d9] transition-all cursor-pointer">
                  {data?.title}
                </h1>
                <div className="flex gap-3 pt-3 font-medium">
                  <div className="flex items-center text-stone-500 dark:text-stone-300 text-[11px] gap-1">
                    <FaUser />
                    <span className="text-[11px] z-[20000]">{data.author}</span>
                  </div>
                  <div className="flex gap-1 items-center text-[11px] dark:text-stone-300 text-stone-500 ">
                    <FaCalendarCheck />
                    <span>{formatPostDate(data.createdDate)}</span>
                  </div>
                  <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300 gap-1">
                    <FaComment className="text-stone-400" />
                    <span>10</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </span>
    </div>
  );
};
export default TechnologyContent;
