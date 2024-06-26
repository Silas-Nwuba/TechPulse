import React, { useEffect } from "react";
import {
  FaClock,
  FaComment,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Interweave } from "interweave";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { htmlToText } from "html-to-text";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { formatPostDate } from "../util/helper";
import SquareAd from "../ui/SquareAd";
import HorizontalAd from "../ui/HorizontalAd";
import { useGetAllPost } from "../feature/post/useGetAllPost";
import ArticlePageLoaderSpinner from "../ui/ArticlePageLoaderSpinner";

const ArticlePage = () => {
  const { data, isLoading } = useGetAllPost();
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { postId } = useParams();
  const item = data?.find((item) => item.id === Number(postId));

  const onSuccess = (data) => {
    toast.success("Comment successfully sent!", { id: "succesid" });
  };
  useEffect(() => {
    document.body.classList.remove("bg-slate-50");
    document.body.classList.add("bg-white");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${item?.title}`;
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, [item]);
  return (
    <>
      <div className="mt-5 flex w-[95%] gap-10 flex-col lg:flex-row mx-auto min-h-screen">
        {isLoading && <ArticlePageLoaderSpinner />}
        {!isLoading && (
          <div className="flex-1">
            <header className="space-y-2">
              <h1 className="text-xl md:text-2xl uppercase  text-stone-800 font-bold leading-9 dark:text-[#e0e0e0]">
                {item?.title}
              </h1>
              <p className="text-stone-500 capitalize text-sm leading-7 dark:text-[#e0e0e0]">
                {htmlToText(item?.summary)}
              </p>
              <div className=" md:flex md:justify-between items-center">
                <div className="flex-col space-y-2">
                  <span className="flex gap-5">
                    <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300">
                      <FaClock className="text-stone-400" />
                      <span>{formatPostDate(item?.createdDate)}</span>
                    </div>
                    <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] dark:text-stone-300 gap-1">
                      <FaComment className="text-stone-400" />
                      <span>10</span>
                    </div>
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-5  md:ml-40">
                  <Link className="bg-slate-50 p-2 rounded-full dark:bg-[#2c2c2c] ">
                    <FaFacebook className="text-sky-600 text-lg" />
                  </Link>
                  <Link className="bg-slate-50 p-2 rounded-full dark:bg-[#2c2c2c]">
                    <FaTwitter className="text-sky-400 text-lg" />
                  </Link>
                  <Link className="bg-slate-50 p-2 rounded-full dark:bg-[#2c2c2c]">
                    <FaWhatsapp className="text-green-600 text-lg" />
                  </Link>
                </div>
              </div>
            </header>
            <section className="mt-8 space-y-6">
              <span>
                <img
                  src={item?.image}
                  alt="articleImage"
                  className="w-full xl:h-[400px] h-[300px]"
                />
              </span>
              <p className="text-sm dark:text-stone-300">
                By <span className="font-semibold">{item?.author} </span>
              </p>
              <div className="dark:text-[#e0e0e0] bg-transparent text">
                <Interweave
                  content={item?.content}
                  style={{ color: "white" }}
                  className="text-sm text-stone-800 dark:text-stone-200 whitespace-pre-wrap tracking-wide py-5 leading-8 capitalize  w-[100%]"
                />
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-xl mt-10 py-4 dark:text-[#e0e0e0]">
                  Leave a Comment
                </h3>
                <p className="mb-5 bg-[#D32F2F] dark:bg-[#D32F2F] dark:border-[#2c2c2c] dark:text-[#e0e0e0] p-4 w-full text-white text-sm rounded-md">
                  Your email address will not be published. Your comment will be
                  reviewed by the administrator before published.
                </p>
                <form onSubmit={handleSubmit(onSuccess)}>
                  <FormRow
                    label={"Name"}
                    error={errors?.name?.message}
                    color="dark:text-[#e0e0e0]"
                  >
                    <input
                      type="text"
                      name="username"
                      {...register("name", {
                        required: "Name field is required",
                        minLength: {
                          value: 3,
                          message: "Name should be atleast 3 character or more",
                        },
                        validate: () => {
                          const nameRegx = /^[a-zA-Z\s]*$/;
                          const nameValidate =
                            nameRegx.test(getValues().name) ||
                            "Name field should not contain special character or a number";
                          return nameValidate;
                        },
                      })}
                      className="disabled:opacity-50  dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0] disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
                    />
                  </FormRow>
                  <FormRow
                    label={"Email address"}
                    error={errors?.email?.message}
                  >
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "Email address field is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                          message:
                            "Email Adress is incorrect check and try again",
                        },
                      })}
                      className="disabled:opacity-50 dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0]  disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
                    />
                  </FormRow>
                  <FormRow label="Message" error={errors?.message?.message}>
                    <textarea
                      height="150px"
                      type="text"
                      name="message"
                      {...register("message", {
                        required: "Message field is required",
                        minLength: {
                          value: 3,
                          message:
                            "Message should be atleast 3 character or more",
                        },
                      })}
                      className={`disabled:opacity-50 dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0] disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
                    />
                  </FormRow>
                  <Button
                    name={"Post comment"}
                    backgroundColor="bg-sky-500"
                    borderColor={"border-sky-500"}
                    darkMode={"bg-[#3a3a3a]"}
                    width={"w-[150px]"}
                    padding="py-3 px-3"
                    marginBottom="mb-0"
                    color="text-white"
                    hover="hover:bg-sky-600"
                  />
                </form>
              </div>
            </section>
          </div>
        )}
        <section className="lg:w-[25%]">
          <SquareAd height={"h-[200px] xl:h-[70%]"} marginTop={"mt-20"} />
          <span className="space-y-5 flex flex-col xl:mt-0 w-3/4 xl:w-full mx-auto"></span>
        </section>
      </div>
    </>
  );
};
export default ArticlePage;
