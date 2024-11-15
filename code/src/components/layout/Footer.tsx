import { Mail, Phone } from "lucide-react";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="shadow-custom-drop-top h-[400px] flex p-mobile md:p-desktop">
      <div className="flex h-fit w-full justify-between pt-8">
        <div className="flex text-[15px] flex-col gap-4">
          <h2 className="font-bold">About Us</h2>
          <div className="flex flex-col gap-3">
            <span className="">Organisation</span>
            <span>Partners</span>
            <span>Clients</span>
          </div>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <h2 className="font-bold">Information</h2>
          <p>
            Bendum dolor eu varius. Morbi fermentum velitsodales egetonec. volutpat orci. Sed ipsum felis tristique. Morbi fermentum velitsodales
            egetonec. volutpat orci. Sed ipsum felis tristique. Bendum dolor eu varius.{" "}
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <h2 className="font-bold">Contact Us</h2>
          <p>
            Bendum dolor eu varius. Morbi fermentum velitsodales egetonec. volutpat orci. Sed ipsum felis tristique. Morbi fermentum velitsodales
            egetonec. volutpat orci. Sed ipsum felis tristique. Bendum dolor eu varius.{" "}
          </p>
          <div className="flex pt-3 gap-3 items-center">
            <Phone className="text-[#692267]" />
            <span>Phone: +420******</span>
          </div>
          <div className="flex pt-3 gap-3 items-center">
            <Mail className="text-[#692267]" />
            <span>scrum@geniuses.cz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
