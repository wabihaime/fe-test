import React from "react";

export const Banner = () => {
  return (
    <div className="px-4 py-3">
      <div
        style={{
          backgroundImage: "url('/Banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "180px",
          width: "100%",
          borderRadius: "10px",
          fontSize: "14px",
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
    </div>
  );
};
