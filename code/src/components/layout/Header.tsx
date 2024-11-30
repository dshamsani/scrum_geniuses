import type { FC } from "react";

import { ChevronDown } from "lucide-react";
import DropdownMenu from "../ui/Dropdown";
import { Link } from "@tanstack/react-router";

export const Header: FC = () => {
  return (
    <header className="w-full h-[120px] flex items-center justify-between shadow-custom-drop md:p-desktop p-mobile">
      <Link to="/">
        <div className="font-hoefler text-[40px] ">
          SCRUM <span className="text-primary">GENIUSES</span>
        </div>
      </Link>
      <div className="flex text-primary font-medium items-center gap-5">
        <div className="flex items-center w-fit gap-1 cursor-pointer">
          <span>AKTUALITY</span>
          <ChevronDown size={20} className="text-inherit" />
        </div>
        <DropdownMenu />
        <Link to="/about">
          <span className="cursor-pointer">O NÁS</span>
        </Link>
        <Link to="/contact">
          <span className="cursor-pointer uppercase">Kontakty</span>
        </Link>
      </div>
    </header>
  );
};
