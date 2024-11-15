import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center w-fit gap-1 cursor-pointer">
        <span>TÉMATA</span>
        {isHovered ? <ChevronUp size={20} className="text-inherit" /> : <ChevronDown size={20} className="text-inherit" />}
      </div>
      {isHovered && (
        <ul className="absolute top-full w-40 bg-white border border-gray-300 shadow-lg rounded">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kultura</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Móda</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Technologie</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Zdraví</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Věda</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jídlo</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sport</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
