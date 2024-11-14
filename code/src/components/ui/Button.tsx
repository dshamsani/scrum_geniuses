import type { FC } from "react";

interface ButtonProps {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button className="px-5 py-3 bg-[#692267] rounded-lg font-helvetica text-white transform transition-transform duration-300 hover:scale-105">
      {title}
    </button>
  );
};
