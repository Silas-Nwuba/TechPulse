import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import LatestPostLoaderSpinner from "./LatestPostLoaderSpinner";
import LatestPostContent from "./LatestPostContent";
import { useGetLatestPostPerPage } from "../feature/post/useGetLatestPostPerPage";
const LatestPost = () => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetLatestPostPerPage();

  return (
    <section className="xl:mb-10">
      <div className="flex justify-between items-center mt-20 xl:mt-0">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            Latest news
          </h2>
          <HiMiniPlay className="dark:text-[#eeee] text-[#1e88e5] text-lg mt-[5px]" />
        </span>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]"></div>

      {isLoading && <LatestPostLoaderSpinner />}
      {data &&
        data.pages.map((pages) =>
          pages.map((item, index) => (
            <LatestPostContent data={item} key={index} />
          ))
        )}
      {!hasNextPage && (
        <span className="flex flex-col items-center">
          <button
            type="button"
            disabled={!hasNextPage}
            onClick={() => fetchNextPage()}
            className="rounded-md text-sm bg-transparent transition duration-300 hover:text-stone-100 ease-in-out border-2 border-sky-500 text-stone-700 dark:text-stone-100  hover:bg-[#4c8ccf] w-40  py-2 px-4 mb-3 font-medium mt-10"
          >
            {isFetchingNextPage ? "Loading.." : "See more"}
          </button>
        </span>
      )}
    </section>
  );
};

export default LatestPost;
