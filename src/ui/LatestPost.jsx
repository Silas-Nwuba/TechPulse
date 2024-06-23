import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LatestPostLoaderSpinner from "./LatestPostLoaderSpinner";
import { useGetAllPost } from "../feature/post/useGetAllPost";
import { differenceInDays, parseISO } from "date-fns";
import LatestPostContent from "./LatestPostContent";
const LatestPost = () => {
  const { data, isLoading } = useGetAllPost();
  let latestPostArr = data?.filter(
    (item) => differenceInDays(new Date(), parseISO(item?.createdDate)) === 0
  );

  return (
    <section className="xl:mb-10 overflow-auto w-[400px] h-[600px] scrollLatestPost">
      <div className="flex justify-between items-center mt-20 xl:mt-0">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            Latest news
          </h2>
          <HiMiniPlay className="dark:text-[#eeee] text-[#1e88e5] text-lg mt-[5px]" />
        </span>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c] "></div>

      {isLoading && <LatestPostLoaderSpinner />}

      {!isLoading && latestPostArr?.length !== 0 && (
        <LatestPostContent data={latestPostArr} />
      )}
      <span className="flex flex-col items-center">
        <button
          type="button"
          className="rounded-md text-sm transition-all ease-in-out text-stone-100 bg-[#007bff]  hover:bg-[#4c8ccf] w-30 py-2 px-4 mb-10 font-medium mt-5"
        >
          See more
        </button>
      </span>
    </section>
  );
};

export default LatestPost;
