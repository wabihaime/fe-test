import React from "react";
import { Bell } from "./icons";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="px-4 text-[14px] w-full">
      <div className=" w-full h-[180px] rounded-[10px] px-[26px] flex flex-col justify-evenly text-white cursor-pointer relative overflow-hidden">
        <Image
          src="/images/banner.png"
          fill={true}
          alt="banner"
          className="absolute right-0 top-0 -z-10 object-cover"
        />
        <h1 className="font-bold">RESCUE</h1>
        <h1 className="font-bold text-yellow">BONUS</h1>
        <h1 className="w-[100px]">WE ARE HERE FOR YOU</h1>
      </div>
      <div className="inline-flex items-center text-primary py-3">
        <Bell />
        <span>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </div>
    </div>
  );
};
