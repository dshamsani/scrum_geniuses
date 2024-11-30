import type { FC } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="  flex items-center gap-5 flex-col  w-full py-8 bg-gradient-to-t from-white to-gray-200 ">
      <h1 className="font-semibold text-[50px] m-0 p-0 leading-[1.1]">{title}</h1>
      <p className="max-w-[800px] text-center">{description}</p>
    </div>
  );
};
