"use client";

import React, { useState } from "react";
import { Filters } from "./Filters";
import {
  Start,
  New,
  Slots,
  Live,
  Jackpots,
  TableGames,
  Bingo,
  Others,
} from "../icons";
import { FilterOption } from "./interface";

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

export const GameList = () => {
  const [activeFilter, setactiveFilter] = useState(FILTER_OPTIONS[0].label);

  return (
    <div>
      <Filters
        filters={FILTER_OPTIONS}
        activeFilter={activeFilter}
        setActiveFilter={(value) => setactiveFilter(value)}
      />
    </div>
  );
};
