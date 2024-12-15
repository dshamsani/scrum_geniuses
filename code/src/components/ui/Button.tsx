import type { FC } from "react";

interface ButtonProps {
  title: string;
  withoutTransform?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ title, withoutTransform = false, onClick }) => {
  return (
    <button
      className={`px-5 py-3 bg-primary font-bold rounded-lg font-helvetica text-white ${withoutTransform ? "" : " transform transition-transform duration-300 hover:scale-105"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
