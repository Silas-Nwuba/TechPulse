import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GadgetLoaderSpinner from "./GadgetLoaderSpinner";
import GadgetContent from "./GadgetContent";
import { useGetAllPost } from "../feature/post/useGetAllPost";

const Gadget = () => {
  const { data, isLoading } = useGetAllPost();
  const gadgetArr = data?.filter((data) => data.category === "Gadget");
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            Gadget
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px] dark:text-stone-100" />
        </span>
        <Link
          to={"/gadget"}
          className="text-[#007bff] dark:text-[#d1d0d0] text-sm"
        >
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]">
        {/* <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0 dark:text-[#1e88e5]"></div> */}
      </div>
      {isLoading && <GadgetLoaderSpinner />}

      {!isLoading && gadgetArr?.length !== 0 && (
        <GadgetContent data={gadgetArr} />
      )}
    </section>
  );
};
export default Gadget;
