import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="shadow-custom-drop-top h-[400px] flex p-mobile md:p-desktop">
      <div className="flex h-fit w-full justify-between pt-8">
        <div className="flex text-[15px] flex-col gap-4">
          <Link to="/about">
            <h2 className="font-bold">O Nás</h2>
          </Link>
          <div className="flex flex-col gap-3">
            <Link to="/about">
              <span>Naše historie</span>
            </Link>
            <Link to="/about">
              <span>Kdo jsme</span>
            </Link>
            <Link to="/about">
              <span>Naše hodnoty</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <h2 className="font-bold">Informace</h2>
          <p>
            Tato aplikace je výsledkem školního projektu v kurzu Řízení SW projektů na Vysoké škole polytechnické Jihlava. Nejedná se o stránky
            skutečného odborného časopisu!
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <h2 className="font-bold">Kontakty</h2>
          <p>
            Scrum Geniuses je tu pro vás. Máte dotazy, zpětnou vazbu nebo chcete navázat spolupráci? Rádi vás vyslechneme! Naším cílem je být
            přístupní a nápomocní, ať už potřebujete jakékoli informace nebo podporu. Jsme tu, abychom vás inspirovali a pomohli vám dosáhnout vašich
            cílů.
          </p>
          <div className="flex pt-3 gap-3 items-center">
            <Phone className="text-primary" />
            <a href="tel:+420123456789">
              <span className="font-medium">Telefon: </span>
              <span className="text-primary">+420123456789</span>
            </a>
          </div>
          <div className="flex pt-3 gap-3 items-center">
            <Mail className="text-primary" />
            <a href="mailto:choloyan@student.vspj.cz">
              <span className="font-medium">Email: </span>
              <span className="text-primary">choloyan@student.vspj.cz</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
