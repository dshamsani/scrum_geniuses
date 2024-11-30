import type { FC } from "react";

import { AboutCard } from "@/components/about/AboutCard";
import { BluetoothSearching, IdCard, LibraryBig } from "lucide-react";

export const About: FC = () => {
  return (
    <main className="pt-[4px]">
      <div className="  flex items-center gap-5 flex-col  w-full py-8 bg-gradient-to-t from-white to-gray-200 ">
        <h1 className="font-semibold text-[50px] m-0 p-0 leading-[1.1]">O nás</h1>
        <p className="max-w-[800px] text-center">
          Scrum Geniuses je unikátní platforma, která přináší nejnovější zprávy, inspirativní příběhy a užitečné informace ze světa technologií,
          podnikání a inovací. Naším cílem je nejen informovat, ale také inspirovat a podporovat vás na vaší cestě k úspěchu.
        </p>
      </div>

      <div className=" px-desktop  flex justify-center  w-full  py-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-[40px] m-0 p-0 leading-[1.1]">Naše historie</h2>
          <p className="max-w-[800px]">
            Zrod Scrum Geniuses byl inspirován potřebou vytvořit prostor, kde se lidé mohou dozvědět o tom, co je skutečně důležité ve světě plném
            technologií a inovací. Od svých počátků jsme se snažili budovat komunitu, která se učí, roste a sdílí znalosti.
          </p>
          <p className="max-w-[800px]">
            První kroky byly jednoduché – začali jsme malými články a zprávami, které měly za cíl vzdělávat a inspirovat. Postupně jsme ale pochopili,
            že naši čtenáři hledají nejen informace, ale také hlubší pohledy na svět. Dnes jsme hrdí na to, že můžeme být platformou, která propojuje
            lidi s podobnými zájmy a hodnotami.
          </p>
          <p className="max-w-[800px]">
            Naše historie není jen o růstu platformy, ale také o příbězích našich čtenářů. Každý příběh nás motivuje pokračovat v naší práci a hledat
            nové způsoby, jak přinášet hodnotný obsah.
          </p>
        </div>
      </div>

      <div className=" px-desktop  flex justify-center  w-full  py-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-[40px] m-0 p-0 leading-[1.1]">Kdo jsme</h2>
          <p className="max-w-[800px]">
            Jsme tým kreativních myslitelů, analytiků a inovátorů, kteří věří, že informace mohou být silným nástrojem změny. Spojuje nás nadšení pro
            technologie, zájem o trendy v podnikání a touha sdílet znalosti, které mohou inspirovat ostatní.
          </p>
          <p className="max-w-[800px]">
            Naše práce je více než jen tvorba článků – jde o spojování lidí, šíření důležitých myšlenek a podporu těch, kteří chtějí udělat něco
            nového. Snažíme se být nejen zdrojem informací, ale také partnerem, který vám pomůže dosáhnout vašich cílů.
          </p>
        </div>
      </div>

      <div className=" px-desktop  flex justify-center  w-full  py-8">
        <div className="flex flex-col w-full items-center gap-8">
          <h2 className="font-semibold text-[40px] m-0 p-0 leading-[1.1]">Naše hodnoty</h2>
          <div className="flex w-full justify-center gap-5">
            <AboutCard
              title="Identita"
              description="Každý projekt má svoji identitu, která ho definuje. My se zaměřujeme na budování identity, která odráží hodnoty našich čtenářů. Chceme, aby se naši čtenáři cítili propojeni s naším obsahem, který jim pomáhá objevovat sami sebe i svět kolem nich."
              icon={<IdCard className="text-[#692267]" size={45} />}
            />
            <AboutCard
              title="Zapojení"
              description="Věříme, že síla komunity spočívá ve spolupráci. Proto vytváříme prostor, kde může každý sdílet své názory, zkušenosti a pohledy na svět. Naše platforma je místem, kde se mohou setkávat lidé se společnými zájmy a vytvářet nové nápady."
              icon={<BluetoothSearching className="text-[#692267]" size={40} />}
            />
            <AboutCard
              title="Příběhy"
              description="Každý příběh je unikátní a má moc inspirovat. Sdílíme příběhy lidí, projektů a inovací, které dokazují, že i malý nápad může mít velký dopad. Naším cílem je ukázat, že úspěch přichází s odhodláním a touhou něco změnit."
              icon={<LibraryBig className="text-[#692267]" size={45} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};