import type { FC } from "react";

import { ChevronDown } from "lucide-react";
import DropdownMenu from "../ui/Dropdown";

export const Header: FC = () => {
  return (
    <header className="w-full h-[120px] flex items-center justify-between shadow-custom-drop md:p-desktop p-mobile">
      <div className="font-hoefler text-[40px] ">
        SCRUM <span className="text-[#692267]">GENIUSES</span>
      </div>
      <div className="flex text-[#692267] font-medium items-center gap-5">
        <div className="flex items-center w-fit gap-1 cursor-pointer">
          <span>AKTUALITY</span>
          <ChevronDown size={20} className="text-inherit" />
        </div>
        <DropdownMenu />
        <span className="cursor-pointer">O NÁS</span>
        <span className="cursor-pointer">KONTAKT</span>
      </div>
    </header>
  );
};
