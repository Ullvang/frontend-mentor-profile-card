import React from "react";

export default function Background() {
  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      <div
        className={` bg-right-bottom h-screen bg-half
          bg-topHalf transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div
        className={` h-screen bg-half
          bg-bottomHalf transform translate-x-1/2 -translate-y-1/2`}
      ></div>
    </div>
  );
}
