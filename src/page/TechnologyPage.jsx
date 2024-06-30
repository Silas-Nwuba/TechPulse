import React, { useEffect, useState } from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { formatPostDate } from "../util/helper";
import SquareAd from "../ui/SquareAd";
import { useGetPostArticlePerPage } from "../feature/post/useGetPostArticlePerPage";

const TechnologyPage = () => {
  const location = useLocation();
  const category =
    location.pathname.replace("/", "").charAt(0).toUpperCase() +
    location.pathname.replace("/", "").slice(1);
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    useGetPostArticlePerPage(category);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `${category} | TechPulse`;
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, [category]);

  return (
    <section className="mb-20 block gap-5 xl:flex mt-10 min-h-screen">
      <div className="w-[100%] xl:w-[70%]">
        <span className="flex item-center gap-2">
          <h2 className="text-xl font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            {category} News
          </h2>
        </span>
        <div className="bg-slate-100 w-full h-[2px] mt-5  dark:bg-[#2c2c2c]"></div>

        <div className="grid grid-cols-1 gap-10 md:gap-7 md:grid-cols-3 mt-10">
          {data &&
            !isLoading &&
            data?.pages.map((page) =>
              page.map((item) => (
                <Link
                  to={`/${
                    item.category.charAt(0).toLowerCase() +
                    item.category.slice(1)
                  }/article/${item.id}`}
                  className=""
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[180px] hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
                  />
                  <span className="space-y-1">
                    <h1 className="text-[15px]  text-stone-800 font-medium dark:text-[#e0e0e0]  cursor-pointer">
                      {item.title}
                    </h1>
                    <div className="flex gap-3 pt-2">
                      <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1 dark:text-stone-300">
                        <FaUser className="text-stone-400" />
                        <span className="text-[11px]">{item.author}</span>
                      </div>
                      <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300">
                        <FaClock className="text-stone-400" />
                        <span>{formatPostDate(item.createdDate)}</span>
                      </div>
                      <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1 dark:text-stone-300">
                        <FaComment className="text-stone-400" />
                        <span>10</span>
                      </div>
                    </div>
                  </span>
                </Link>
              ))
            )}
        </div>
        {hasNextPage && (
          <span className="flex flex-col items-center mt-2">
            <button
              type="button"
              disabled={!hasNextPage}
              onClick={handleLoadMore}
              className="rounded-md text-sm tracking-wider cursor-pointer hover:text-stone-100 transition duration-300 ease-in-out border-2 border-[#4c8ccf]  text-stone-100 bg-[#5195df] hover:bg-[#4a89cc] w-[140px]  py-2 px-2  font-medium mt-10"
            >
              {isFetchingNextPage ? "Loading More..." : "View More"}
            </button>
          </span>
        )}
      </div>
      <div className="w-px bg-gray-200 hidden xl:block dark:bg-[#2c2c2c] mt-10"></div>
      <aside className="w-full xl:w-[25%]  flex-1 mt-20 xl:mt-10">
        <SquareAd height={"h-[600px]"} marginTop={"mt-[60px]"} />
      </aside>
    </section>
  );
};
export default TechnologyPage;
