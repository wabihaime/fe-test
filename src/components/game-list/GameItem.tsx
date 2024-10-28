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
      }}
    >
      <div className="absolute right-0 top-0">
        <Image src="/favoriteMask.png" height={40} width={40} alt="mask" />
      </div>
      <div className="absolute right-1 top-1 ">
        <Button
          className={classNames(
            isFavorite ? "text-yellow" : "text-white",
            "px-0 py-0"
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
