import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";

const NotificationModal = ({ handleBrowserNotification }) => {
  return (
    <div className="bg-white shadow-md w-[90%] sm:w-auto py-5  space-y-4 rounded-sm  z-[50000] transition-shadow absolute top-5 left-1/2 -translate-x-1/2">
      <span className="flex items-center justify-center flex-wrap space-y-3 mx-3">
        <MdOutlineNotificationsActive className="text-xl text-blue-500" />
        <p className="mx-3 text-center">
          Enable TechPulse to notify you on our latest post
        </p>
      </span>
      <div className="border-b-stone-200 border border-r-0 border-l-0 border-t-0 "></div>
      <div className="my-10 flex gap-4 font-medium  float-right cursor-pointer px-3">
        <buton
          type="button"
          className="bg-stone-200 text-stone-500 text-sm rounded-md p-3 "
        >
          Cancel
        </buton>
        <buton
          type="button"
          className="bg-blue-700 text-white text-sm rounded-md p-3"
          onClick={() => handleBrowserNotification}
        >
          Allow
        </buton>
      </div>
    </div>
  );
};

export default NotificationModal;
