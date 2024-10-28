"use client";
import React, { useState } from "react";
import {
  Bingo,
  Jackpots,
  Live,
  New,
  Others,
  Search,
  Slots,
  Start,
  TableGames,
} from "../icons";
import { Button } from "../Button";
import classNames from "@/helpers/classnames";

interface FilterOption {
  label: string;
  icon: React.ReactNode;
}

const FILTER_OPTIONS: FilterOption[] = [
  {
    label: "Start",
    icon: <Start />,
  },
  {
    label: "New",
    icon: <New />,
  },
  {
    label: "Slots",
    icon: <Slots />,
  },
  {
    label: "Live",
    icon: <Live />,
  },
  {
    label: "Jackpots",
    icon: <Jackpots />,
  },
  {
    label: "Table Games",
    icon: <TableGames />,
  },
  {
    label: "Bingo",
    icon: <Bingo />,
  },
  {
    label: "Others",
    icon: <Others />,
  },
];

export const Filters = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="h-[50px] w-full items-center flex">
      <FilterButton
        option={{
          label: "Search",
          icon: <Search />,
        }}
        onClick={() => setOpenSearch(!openSearch)}
        isActive={openSearch}
      />
      <div style={{ width: 1, height: 30, backgroundColor: "#888888" }} />
      <div className=" w-full items-center flex overflow-x-scroll">
        {FILTER_OPTIONS.map((option) => (
          <FilterButton
            key={option.label}
            option={option}
            isActive={activeFilter === option.label}
            onClick={() => {
              setActiveFilter(option.label);
              setOpenSearch(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FilterButton = ({
  option,
  isActive = false,
  onClick,
}: {
  option: FilterOption;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames(
        isActive ? "text-primary" : "text-grey",
        "flex flex-col text-[14px] gap-1"
      )}
    >
      {option.icon}
      <span className="uppercase">{option.label}</span>
    </Button>
  );
};
