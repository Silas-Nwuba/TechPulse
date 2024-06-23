import React, { useEffect } from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { formatPostDate } from "../util/helper";
import PageLoaderSpinner from "../ui/PageLoaderSpinner";
import { useGetAllPost } from "../feature/post/useGetAllPost";

const GadgetPage = () => {
  const { data, isLoading } = useGetAllPost();
  const gadgetPostErr = data?.filter((data) => data.category === "Gadget");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Business | TechPulse";
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, []);
  return (
    <section className="min-h-screen">
      <div>
        <span className="flex item-center gap-2">
          <h2 className="text-xl font-semibold text-stone-800 tracking-wide uppercase dark:text-[#e0e0e0]">
            gadget
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px] dark:text-stone-100" />
        </span>
        <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]">
          <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {isLoading && <PageLoaderSpinner />}
        {!isLoading && gadgetPostErr?.length === 0 && (
          <p className="mt-5 text-center text-[15px] dark:text-[#e0e0e0]">
            No gadget posts available. Check back soon!
          </p>
        )}
        {!isLoading &&
          gadgetPostErr.length !== 0 &&
          gadgetPostErr?.map((item) => {
            return (
              <Link
                to={`/${
                  item.category.charAt(0).toLowerCase() + item.category.slice(1)
                }/article/${item.id}`}
                className="flex gap-4"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
                />
                <span className="space-y-1">
                  <h1 className="text-[15px] focus:text-[#007bff] text-stone-800 dark:text-[#e0e0e0] font-semibold hover:text-[#007bff] transition-all cursor-pointer">
                    {item.title}
                  </h1>
                  <div className="flex gap-3 pt-2">
                    <div className="flex items-center text-[(rgb(84, 86, 88))] dark:text-stone-300 text-[11px] gap-1">
                      <FaUser className="text-stone-400" />
                      <span className="text-[11px]">{item.author}</span>
                    </div>
                    <div className="flex gap-1 items-center text-[11px] dark:text-stone-300 text-[(rgb(84, 86, 88))]">
                      <FaClock className="text-stone-400" />
                      <span>{formatPostDate(item.createdDate)}</span>
                    </div>
                    <div className="flex items-center text-[11px] dark:text-stone-300 text-[(rgb(84, 86, 88))] gap-1">
                      <FaComment className="text-stone-400" />
                      <span>10</span>
                    </div>
                  </div>
                </span>
              </Link>
            );
          })}
      </div>
      {/* <div className="my-80  bg-slate-50 py-10 flex flex-col justify-center items-center">
        <img src="\image\google-ads.PNG" alt="" className="w-[500px] " />
      </div> */}
    </section>
  );
};

export default GadgetPage;
