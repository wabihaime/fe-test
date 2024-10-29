"use client";
import React, { useEffect, useState } from "react";
import { Filter, Search } from "../icons";
import { Button } from "../Button";
import classNames from "@/helpers/classnames";
import { FilterOption } from "./interface";

interface FiltersProps {
  filters: FilterOption[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  query: string;
  setQuery: (query: string) => void;
}

export const Filters = ({
  filters,
  activeFilter,
  setActiveFilter,
  query,
  setQuery,
}: FiltersProps) => {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    if (!openSearch) {
      setQuery("");
    }
  }, [openSearch]);

  return (
    <>
      <div className="w-full items-center flex overflow-hidden">
        <FilterButton
          option={{
            label: "Search",
            icon: <Search />,
          }}
          onClick={() => setOpenSearch(!openSearch)}
          isActive={openSearch}
        />
        <div style={{ width: 1, height: 30, backgroundColor: "#888888" }} />
        <div className="w-full items-center flex overflow-x-scroll no-scrollbar">
          {filters.map((option) => (
            <FilterButton
              key={option.label}
              option={option}
              isActive={activeFilter === option.label}
              onClick={() => {
                setActiveFilter(option.label);
              }}
            />
          ))}
        </div>
      </div>
      <div
        className={classNames(
          openSearch ? "block" : "hidden",
          "flex w-full px-3 gap-2"
        )}
      >
        <div className="flex-1 ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={classNames(
              "w-full p-2 -md h-8 rounded-md ring-1 ring-primary"
            )}
          ></input>
        </div>
        <Button className="ring-1 ring-primary rounded-md h-8 w-8 pl-0 pr-0 pt-0 pb-0">
          <Filter />
        </Button>
      </div>
    </>
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
