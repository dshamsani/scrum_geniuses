import type { FC, ReactNode } from "react";

interface PageSectionProps {
  title: string;
  titleClassname?: string;
  wrapperClassname?: string;
  content: ReactNode;
}

export const PageSection: FC<PageSectionProps> = ({ title, content, titleClassname, wrapperClassname }) => {
  return (
    <div className={` px-desktop  flex justify-center  w-full  py-8`}>
      <div className={`flex flex-col ${wrapperClassname ? wrapperClassname : "max-w-[800px] gap-5"}`}>
        <h2 className={`font-semibold text-[40px] m-0 p-0 leading-[1.1] ${titleClassname ? titleClassname : ""}`}>{title}</h2>
        {content}
      </div>
    </div>
  );
};
