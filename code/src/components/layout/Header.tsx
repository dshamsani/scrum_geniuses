import type { FC } from "react";

import { ChevronDown } from "lucide-react";

import { Button } from "../ui/Button";

export const Header: FC = () => {
  return (
    <header className="w-full h-[120px] flex items-center justify-between shadow-custom-drop md:p-desktop p-mobile">
      <div className="font-hoefler text-[40px] ">
        SCRUM <span className="text-[#692267]">GENIUSES</span>
      </div>
      <div className="flex text-[#692267] font-medium items-center gap-5">
        <div className="flex items-center w-fit gap-1 cursor-pointer">
          <span>NEWS</span>
          <ChevronDown size={20} className="text-inherit" />
        </div>
        <div className="flex items-center w-fit gap-1 cursor-pointer">
          <span>PAGES</span>
          <ChevronDown size={20} className="text-inherit" />
        </div>
        <span className="cursor-pointer">ABOUT US</span>
        <span className="cursor-pointer">CONTACT US</span>
        <Button title="Log in" />
      </div>
    </header>
  );
};
