"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import {
  Cashier,
  Casino,
  Invite,
  SelectionCircle,
  Sports,
  Star,
} from "./icons";
import classNames from "@/helpers/classnames";

interface NavOption {
  label: string;
  icon: React.ReactNode;
}

const NAV_OPTIONS: NavOption[] = [
  {
    label: "Sports",
    icon: <Sports />,
  },
  {
    label: "Favorites",
    icon: <Star />,
  },
  {
    label: "Invite",
    icon: <Invite />,
  },
  {
    label: "Casino Live",
    icon: <Casino />,
  },
  {
    label: "Cashier",
    icon: <Cashier />,
  },
];

export const FooterNav = () => {
  const [activeRoute, setActiveRoute] = useState(NAV_OPTIONS[0].label);

  return (
    <div className="absolute bottom-0  w-full bg-white flex items-stretch">
      {NAV_OPTIONS.map((option, index) => (
        <NavButton
          key={index}
          option={option}
          isActive={activeRoute === option.label}
          onClick={() => {
            setActiveRoute(option.label);
          }}
        />
      ))}
    </div>
  );
};

const NavButton = ({
  option,
  isActive,
  onClick,
}: {
  option: NavOption;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames(
        "px-0 py-2 h-[50px]",
        isActive ? "text-primary" : "text-grey",
        "flex flex-col flex-1 uppercase items-center justify-end w-full"
      )}
    >
      <div className="relative flex items-center justify-center p-2">
        {isActive && (
          <div className="absolute top-0">
            <SelectionCircle />
          </div>
        )}
        {option.icon}
      </div>
      <span className="text-[12px] text-center">{option.label}</span>
    </Button>
  );
};
