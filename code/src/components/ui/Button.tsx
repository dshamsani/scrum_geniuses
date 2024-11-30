import type { FC } from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="px-5 py-3 bg-primary font-bold rounded-lg font-helvetica text-white transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
