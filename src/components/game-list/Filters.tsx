"use client";
import React, { useState } from "react";
import { Search } from "../icons";
import { Button } from "../Button";
import classNames from "@/helpers/classnames";
import { FilterOption } from "./interface";

interface FiltersProps {
  filters: FilterOption[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const Filters = ({
  filters,
  activeFilter,
  setActiveFilter,
}: FiltersProps) => {
  const [openSearch, setOpenSearch] = useState(false);

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
        {filters.map((option) => (
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
