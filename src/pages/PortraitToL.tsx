import { useState, useEffect, useRef } from "react";
import mainImg from "/comp4/main.png"

function PortraitToL() {


  return (
    <div className="flex items-center justify-center font-extrabold text-7xl text-center min-h-[90vh] font-mono">
      <div className="relative overflow-hidden">
        {/* Big image - bottom layer */}
        <img src={mainImg} className="h-[400px] w-[650px] mx-auto rounded-2xl">
        </img>
        {/* Backdrop blur - middle layer */}
        <div className="absolute inset-0 backdrop-blur-lg bg-[#0E0E0E]/70 z-10 rounded-2xl">

        </div>
        {/* Small image - top layer */}
        <img src={mainImg} className="absolute inset-0 w-[220px] h-[400px] z-20 mx-auto">
        </img>
      </div>
    </div>
  );
}

export default PortraitToL;