import type { FC } from "react";

import WhiteLogo from "@/resources/white-logo.svg";
import HeartIcon from "@/resources/icons/heart.svg";

export const LayoutFooter: FC = () => {
  return (
    <footer className='flex min-h-[550px] flex-col items-center bg-[#B00000] px-mobile pb-5 text-white lg:px-desktop'>
      <img src={WhiteLogo} alt='White' />
      <div className='flex flex-col items-center gap-10'>
        <p className='max-w-[1220px] text-center text-lg md:text-2xl'>
          Scrum Geniuses je fiktivní společnost vytvořená výhradně pro účely
          testovacího projektu v rámci univerzitního studia. Tento web není
          oficiálně používán v žádném komerčním ani veřejném kontextu, veškeré
          informace a služby na stránce slouží pouze k demonstraci technických a
          kreativních dovedností studentů. Jakákoli podobnost se skutečnými
          společnostmi, produkty nebo službami je čistě náhodná a neúmyslná.
        </p>
        <span className='text-center text-base font-semibold md:text-xl'>
          Vytvořeno Scrum Geniuses pro projekt RSP
        </span>
        <img src={HeartIcon} alt='We love you!' />
      </div>
    </footer>
  );
};
