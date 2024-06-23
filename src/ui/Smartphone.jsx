// import React from "react";
// import { HiMiniPlay } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import SmartphoneLoaderSpinner from "./SmartphoneLoaderSpinner";
// import { useGetallPost } from "../feature/post/useGetallPost";
// import SmartphoneContent from "./SmartphoneContent";
// const Smartphone = () => {
//   const { data, isLoading } = useGetallPost();
//   const smartphoneArr = data?.filter((item) => item.category === "SmartPhone");
//   console.log(smartphoneArr);

//   return (
//     <section className="mt-20">
//       <div className="flex justify-between items-center">
//         <span className="flex item-center gap-2">
//           <h2 className="text-2xl font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
//             Smartphone
//           </h2>
//           <HiMiniPlay className="text-[#007bff] text-xl mt-[5px] dark:text-stone-100" />
//         </span>
//         <Link
//           to={"/smartphone"}
//           className="text-[#007bff] text-sm dark:text-[#1e88e5]"
//         >
//           See More
//         </Link>
//       </div>
//       <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]">
//         <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0 dark:text-[#1e88e5]"></div>
//       </div>

//       {isLoading && <SmartphoneLoaderSpinner />}

//       {!isLoading && smartphoneArr?.length === 0 && (
//         <p className="mt-10 text-center text-[15px] dark:text-[#e0e0e0]">
//           No smartphone posts available. Check back soon!
//         </p>
//       )}
//       {!isLoading && smartphoneArr?.length !== 0 && (
//         <SmartphoneContent data={smartphoneArr} />
//       )}
//     </section>
//   );
// };
// export default Smartphone;
