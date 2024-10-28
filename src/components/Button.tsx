import classNames from "@/helpers/classnames";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  onClick = () => {},
  className = "",
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center px-4 py-2 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
