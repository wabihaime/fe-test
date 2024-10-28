"use client";

import React, { useEffect, useState } from "react";
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
import { Game, GAMES } from "@/constants/games";
import { GameItem } from "./GameItem";

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
  const [loadingGames, setLoadingGames] = useState(false);
  const [activeFilter, setactiveFilter] = useState(FILTER_OPTIONS[0].label);
  const [games, setGames] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const fetchGames = async () => {
    try {
      setLoadingGames(true);
      const results: Game[] = await new Promise((resolve) =>
        setTimeout(() => resolve(GAMES), 3000)
      );

      setGames(results);
    } catch (error) {
    } finally {
      setLoadingGames(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div>
      <Filters
        filters={FILTER_OPTIONS}
        activeFilter={activeFilter}
        setActiveFilter={(value) => setactiveFilter(value)}
      />
      <div className="flex flex-wrap gap-1 py-2 mx-auto w-full">
        {games.map((game) => (
          <GameItem
            key={game.id}
            game={game}
            toggleFavorite={() => handleFavorite(game.id)}
            isFavorite={favorites.includes(game.id)}
          />
        ))}
      </div>
    </div>
  );
};
