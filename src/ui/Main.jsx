import React from "react";
import Technology from "./Technology";
import Business from "./Business";
import Gadget from "./Gadget";
import HorizontalAd from "../ui/HorizontalAd";

const Main = () => {
  return (
    <>
      <Technology />
      <Business />
      <HorizontalAd
        marginTop={"mt-[50px]"}
        backgroundColor={"dark:bg-[#414040] bg-slate-100"}
      />
      <Gadget />
    </>
  );
};

export default Main;
