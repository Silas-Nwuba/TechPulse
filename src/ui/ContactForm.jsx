// import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";

const ContactForm = () => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const onsubmit = () => {
    toast.success("Message sent successfully", {
      id: "successId",
    });
    reset();
  };
  const onerror = () => {};

  return (
    <div className="bg-white dark:bg-[#212121] rounded-md py-5 px-2 w-[90%] md:w-[60%] mx-auto col-span-2  mt-5 min-h-screen">
      <h2 className="text-stone-600  text-center font-semibold mb-10 text-2xl dark:text-[#fafafa]">
        Contact us
      </h2>
      <form onSubmit={handleSubmit(onsubmit, onerror)} className="space-y-4">
        <div className="mb-3">
          <label htmlFor="fullname" className="dark:text-[#e0e0e0]">
            Enter name
          </label>
          <input
            type="text"
            className="text-sm focus:outline-none border dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0] focus:border-2 border-stone-300 rounded-md p-4 mt-1 w-full focus:border-sky-400"
            name="name"
            {...register("name", {
              required: "Name field is required",
              validate: () => {
                const nameRegx = /^[a-zA-Z\s]*$/;
                const nameValidate =
                  nameRegx.test(getValues().name) ||
                  "Name field should not contain special character or a number";
                return nameValidate;
              },
              minLength: {
                value: 3,
                message: "Please name should not be less than 3 charater",
              },
              maxLength: {
                value: 50,
                message: "Please name should not be greater than 50 character",
              },
            })}
          />
          <small className="text-red-500 text-sm">
            {getValues().name !== "" ? "" : errors?.name?.message}
          </small>
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="dark:text-[#e0e0e0]">
            Email address
          </label>
          <input
            name="email"
            type="text"
            className="text-sm focus:outline-none border dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0] border-stone-300 rounded-md p-4 mt-1 w-full focus:border-sky-400 focus:border-2"
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                message: "Email is incorrect check and try again",
              },
            })}
          />
          <small className="text-red-500 text-sm">
            {getValues().email !== "" ? "" : errors?.email?.message}
          </small>
        </div>
        <div className="mt-3">
          <label htmlFor="message" className="dark:text-[#e0e0e0]">
            Message
          </label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="text-sm h-[150px] focus:outline-none border dark:bg-[#2c2c2c] dark:border-[#2c2c2c] dark:text-[#e0e0e0] overflow-hidden  focus:border-sky-400 focus:border-2 border-stone-300 rounded-md p-2 mt-2 w-full"
            {...register("message", {
              required: "Message field is required",
            })}
          ></textarea>
          <small className="text-red-500 text-sm">
            {errors?.message?.message}
          </small>
        </div>
        <Button name="Submit" width={"w-[130px]"} />
      </form>
    </div>
  );
};

export default ContactForm;
