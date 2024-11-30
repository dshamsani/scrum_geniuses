import type { FC } from "react";

import { PageHeader } from "@/components/ui/PageHeader";
import { PageSection } from "@/components/ui/PageSection";

export const Contact: FC = () => {
  return (
    <main className="pt-[4px]">
      <PageHeader
        title="Kontakty"
        description="Scrum Geniuses je tu pro vás. Máte dotazy, zpětnou vazbu nebo chcete navázat spolupráci? Rádi vás vyslechneme! Naším cílem je být přístupní a nápomocní, ať už potřebujete jakékoli informace nebo podporu. Jsme tu, abychom vás inspirovali a pomohli vám dosáhnout vašich cílů."
      />

      <PageSection
        title="Jak nás můžete kontaktovat?"
        titleClassname="self-center"
        content={
          <ul className="list-disc list-inside flex flex-col gap-3">
            <li>
              <strong>E-mail:</strong> Pokud máte otázky ohledně naší platformy, spolupráce nebo jiných záležitostí, napište nám na naši e-mailovou
              adresu:{" "}
              <a href="mailto:choloyan@student.vspj.cz" className="text-primary">
                choloyan@student.vspj.cz
              </a>
              . Odpovíme co nejdříve!
            </li>
            <li>
              <strong>Telefon:</strong> Preferujete osobnější komunikaci? Zavolejte nám na číslo: +420 123 456 789. Jsme dostupní v pracovní dny od
              9:00 do 17:00.
            </li>
          </ul>
        }
      />

      <PageSection
        title="Náš tým"
        content={
          <p>
            Jsme malý, ale dynamický tým, který věří v otevřenou komunikaci a přístupnost. Každý z nás má své role, ale všichni sdílíme stejný cíl:
            přinášet vám kvalitní obsah a být vám k dispozici, kdykoliv nás budete potřebovat.
          </p>
        }
      />

      <PageSection
        title="Kde nás najdete?"
        content={
          <div className="flex flex-col gap-3">
            <p>
              Naše kanceláře se nachází v centru Prahy. Pokud byste nás chtěli navštívit osobně, dejte nám vědět předem, abychom si na vás udělali
              čas!
            </p>
            <div className="flex flex-col w-fit">
              <span className="font-semibold">Adresa</span>
              <span>Scrum Geniuses s.r.o.</span>
              <span>Tolstého 1556, 586 01 Jihlava 1</span>
              <a
                href="https://www.google.com/maps/place/Vysok%C3%A1+%C5%A1kola+polytechnick%C3%A1+Jihlava+(V%C5%A0PJ)/@49.3993213,15.5795794,17z/data=!3m1!4b1!4m6!3m5!1s0x470d1a6a0a4b6b2d:0xb11c047885875623!8m2!3d49.3993213!4d15.5821543!16s%2Fg%2F121qfklq?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="cursor-default"
              >
                <img src="vspj.jpg" alt="" className="mt-10 cursor-pointer" />
              </a>
            </div>
          </div>
        }
      />
    </main>
  );
};
