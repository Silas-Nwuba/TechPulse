import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatPostDate } from "../util/helper";
import { FaCalendarCheck } from "react-icons/fa";
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
              className=" w-full h-[250px] cursor-pointer"
            />
            <span className=" mx-4 ">
              <h1 className="text-xl text-stone-700 dark:text-[#ece8e8] font-medium cursor-pointer">
                {data.title}
              </h1>
              <div className="flex gap-3 pt-2 font-medium">
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
      <span className="space-y-10 xl:mt-0 ">
        {data?.slice(1, 5).map((data) => {
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
                className="object-fit w-full lg:w-[100px] h-[250px] lg:h-[91px] hover:opacity-70 cursor-pointer transition-transform duration-300 ease-in-out"
              />
              <div className=" mt-4 lg:mt-0">
                <h1 className="text-[16px]  text-stone-600 font-medium dark:text-[#dbd9d9] transition-all cursor-pointer">
                  {data?.title}
                </h1>
                <div className="flex gap-3 pt-2 font-medium">
                  <div className="flex items-center text-stone-500 dark:text-stone-300 text-[11px] gap-1">
                    <FaUser />
                    <span className="text-[11px] z-[20000]">{data.author}</span>
                  </div>
                  <div className="flex gap-1 items-center text-[11px] dark:text-stone-300 text-stone-500 ">
                    <FaCalendarCheck />
                    <span>{formatPostDate(data.createdDate)}</span>
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
