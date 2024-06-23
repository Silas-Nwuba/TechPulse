import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import TechLoaderSpinner from "./TechLoaderSpinner";
import { useGetAllPost } from "../feature/post/useGetAllPost";
import TechnologyContent from "./TechnologyContent";
const Technology = () => {
  const { data, isLoading } = useGetAllPost();
  console.log(isLoading);
  const techArr = data?.filter((data) => data.category === "Technology");
  return (
    <section>
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            Technology
          </h2>
          {/* <HiMiniPlay className="text-[#007bff] dark:text-stone-100 text-xl mt-[5px]" /> */}
        </span>
        <Link
          to={"/technology"}
          className="text-[#007bff] dark:text-[#d1d0d0] text-sm"
        >
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]">
        {/* <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div> */}
      </div>

      {isLoading && <TechLoaderSpinner />}
      {!isLoading && techArr?.length !== 0 && (
        <TechnologyContent data={techArr} />
      )}
    </section>
  );
};

export default Technology;
