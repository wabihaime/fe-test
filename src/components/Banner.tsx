import React from "react";
import { Bell } from "./icons";

export const Banner = () => {
  return (
    <div className="px-4 py-3 text-[14px]">
      <div
        style={{
          backgroundImage: "url('/Banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "180px",
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          color: "white",
          padding: "0 26px",
          cursor: "pointer",
        }}
      >
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
