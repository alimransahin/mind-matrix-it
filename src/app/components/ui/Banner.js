import React from "react";
import bg from "@/app/assets/bg-shape-2.svg";

import Typewriter from "./Typewriter";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-left"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-base-100/80 ">
        <div className="container mx-auto pt-20">
          <div className="lg:w-1/2">
            <Typewriter />
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
