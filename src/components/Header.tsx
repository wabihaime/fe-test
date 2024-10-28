"use client";
import React from "react";
import { Button } from "./Button";
import { Border, Menu, User, Wallet } from "./icons";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="h-[50px] bg-white flex items-center text-primary gap-2">
      <Button onClick={() => {}}>
        <Menu />
      </Button>
      <Image
        src="/F1M5_Logo.png"
        alt="logo"
        width={92}
        height={20}
        style={{ objectFit: "contain" }}
      />
      <div className="flex-1"></div>
      <span className="text-[#888]">
        <Wallet />
      </span>
      <span>$1990.60</span>
      <Border />
      <Button>
        <User />
      </Button>
    </div>
  );
};
