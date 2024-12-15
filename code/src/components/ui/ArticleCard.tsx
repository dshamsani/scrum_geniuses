import type { FC } from "react";
import { Button } from "./Button";

interface ArticleCardProps {
  title: string;
  description: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({ title, description }) => {
  return (
    <div className="shadow-card cursor-pointer flex justify-between flex-col max-w-[300px] h-[300px] aspect-square px-3 py-4 rounded-lg flex-grow hover:scale-105 transition-all duration-300 gap-3">
      <div className="flex flex-col gap-3">
        <h3 className=" font-semibold text-sm text-center self-center">{title}</h3>
        <p className=" text-sm max-h-[200px]" dangerouslySetInnerHTML={{ __html: description.slice(0, 400) + "..." }}></p>
      </div>
      <Button title="Cist vice" withoutTransform />
    </div>
  );
};
