"use client";
import React, { useEffect, useState } from "react";
import { Close, Filter, Search } from "../icons";
import { Button } from "../Button";
import classNames from "@/helpers/classnames";
import { FilterOption } from "./interface";
import providers from "@/constants/providers";
import Image from "next/image";

interface FiltersProps {
  filters: FilterOption[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  query: string;
  setQuery: (query: string) => void;
  selectedProvider: string;
  setSelectedProvider: (provider: string) => void;
}

export const Filters = ({
  filters,
  activeFilter,
  setActiveFilter,
  query,
  setQuery,
  selectedProvider,
  setSelectedProvider,
}: FiltersProps) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openProviders, setOpenProviders] = useState(false);

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
        <Button
          onClick={() => setOpenProviders(true)}
          className={classNames(
            "ring-1 rounded-md h-8 w-8 pl-0 pr-0 pt-0 pb-0",
            selectedProvider
              ? "ring-primary text-pretty"
              : "ring-grey text-grey"
          )}
        >
          <Filter />
        </Button>
      </div>

      <div
        className={classNames(
          "fixed z-50 inset-0 bg-black/40",
          openProviders ? "block" : "hidden"
        )}
      >
        <div className="bg-white h-[80%] fixed bottom-0 inset-x-0">
          <div className="bg-primary flex text-white h-[40px] items-center px-3 py-2 gap-2">
            <Filter />
            <span>Game Provider </span>
            <span className="px-3 py-1 border border-white rounded-full text-[12px]">
              {providers.length}
            </span>
            <div className="flex-1" />
            <Button onClick={() => setOpenProviders(false)}>
              <Close />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className={classNames(
                  "h-[35px] w-[45%] relative bg-[#F2F2FA] rounded-md cursor-pointer",
                  selectedProvider === provider.name
                    ? "border-2 border-primary"
                    : ""
                )}
                onClick={() => {
                  setSelectedProvider(
                    selectedProvider === provider.name ? "" : provider.name
                  );
                  setOpenProviders(false);
                }}
              >
                <Image
                  src={provider.url}
                  fill={true}
                  alt={provider.name}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
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
