import type { FC, ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const AboutCard: FC<AboutCardProps> = ({ title, description, icon }) => {
  return (
    <div className="shadow-card flex flex-col max-w-[300px] px-3 py-4 rounded-lg flex-grow w-full hover:scale-105 transition-all duration-300 gap-3">
      <div className="w-[40px] aspect-square self-center flex items-center justify-center">{icon}</div>
      <div className="flex w-full flex-col gap-1">
        <h3 className=" font-semibold text-lg self-center">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};
