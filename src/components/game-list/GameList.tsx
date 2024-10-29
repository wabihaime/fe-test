"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  const [query, setQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");

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

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      return selectedProvider
        ? game.name.toLowerCase().includes(query.toLowerCase()) &&
            game.provider.toLowerCase().includes(selectedProvider.toLowerCase())
        : (game.category.toLowerCase() === activeFilter.toLowerCase() ||
            activeFilter === "Start") &&
            game.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [activeFilter, games, query, selectedProvider]);

  return (
    <div className="flex flex-col items-center">
      <Filters
        filters={FILTER_OPTIONS}
        activeFilter={activeFilter}
        setActiveFilter={(value) => setactiveFilter(value)}
        query={query}
        setQuery={(text) => setQuery(text)}
        selectedProvider={selectedProvider}
        setSelectedProvider={(value) => setSelectedProvider(value)}
      />
      {loadingGames ? (
        <div className="w-full h-full grid place-items-center text-grey">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 py-2 px-3 h-full w-full overflow-y-scroll no-scrollbar">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <GameItem
                key={game.id}
                game={game}
                toggleFavorite={() => handleFavorite(game.id)}
                isFavorite={favorites.includes(game.id)}
              />
            ))
          ) : (
            <div className="h-full w-full grid place-items-center text-grey">
              No games found
            </div>
          )}
        </div>
      )}
    </div>
  );
};
