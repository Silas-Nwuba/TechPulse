import React from "react";
import LatestPost from "./LatestPost";
import AppPost from "./AppPost";
import SquareAd from "./SquareAd";

const Aside = () => {
  return (
    <aside>
      <LatestPost />
      <SquareAd height={"h-[500px]"} marginTop={"mt-[2px]"} />
      <AppPost />
      {/* <SquareAd height={"h-[500px]"} marginTop={"mt-[60px]"} /> */}
    </aside>
  );
};

export default Aside;
