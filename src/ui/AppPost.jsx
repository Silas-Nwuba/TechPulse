import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetAllPost } from "../feature/post/useGetAllPost";
import AppPostContent from "./AppPostContent";
import AppPostLoaderSpinner from "./AppPostLoaderSpinner";
const OlderPost = () => {
  const { data, isLoading } = useGetAllPost();
  let appPostArr = data?.filter((item) => item.category === "Apps");
  return (
    <section className="mt-10 mb-20 xl:mb-0">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 tracking-wide uppercase dark:text-[#e0e0e0]">
            APPS
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px] dark:text-stone-100" />
        </span>
        <Link
          to={"/app"}
          className="text-[#007bff] dark:text-[#d1d0d0] text-sm"
        >
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]"></div>
      {isLoading && <AppPostLoaderSpinner />}
      {!isLoading && appPostArr?.length !== 0 && (
        <AppPostContent data={appPostArr} />
      )}
    </section>
  );
};

export default OlderPost;
