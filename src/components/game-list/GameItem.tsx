import { Game } from "@/constants/games";
import Image from "next/image";
import React from "react";
import { FavoriteBtn, FavoriteBtnOutline, Star } from "../icons";
import { Button } from "../Button";
import classNames from "@/helpers/classnames";

interface GameItemProps {
  game: Game;
  toggleFavorite: () => void;
  isFavorite: boolean;
}

export const GameItem = ({
  game,
  toggleFavorite,
  isFavorite,
}: GameItemProps) => {
  return (
    <div
      className="w-[30%] aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-white text-2xl font-bold relative"
      style={{
        backgroundImage: `url(https://picsum.photos/200)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="/favoriteMask.png"
        style={{
          width: "15%",
          height: "15%",
          minWidth: "50px",
          minHeight: "50px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
        alt="mask"
      />

      <div className="absolute right-2 top-2 ">
        <Button
          className={classNames(
            "pl-0 pr-0 pt-0",
            isFavorite ? "text-yellow" : "text-white"
          )}
          onClick={toggleFavorite}
        >
          {isFavorite ? <FavoriteBtn /> : <FavoriteBtnOutline />}
        </Button>
      </div>
      {game.name}
    </div>
  );
};
