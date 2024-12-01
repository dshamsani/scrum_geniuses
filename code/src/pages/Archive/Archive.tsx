import type { FC } from "react";

import { PageHeader } from "@/components/ui/PageHeader";
import { PageSection } from "@/components/ui/PageSection";

export const Archive: FC = () => {
  return (
    <main className="pt-[4px]">
      <PageHeader
        title="Archiv"
        description="Vítejte v archivu Scrum Geniuses. Přinášíme vám bohatou sbírku minulých článků, příběhů a inspirativních materiálů. Prozkoumejte naše předchozí publikace a nechte se inspirovat nápady, které přetrvávají. Ať už hledáte konkrétní téma nebo si chcete připomenout oblíbený obsah, náš archiv je tu pro vás."
      />

      <PageSection
        title="Vydani časopisu"
        wrapperClassname="max-w-[800px] w-full flex flex-col gap-3"
        content={<p>Zatím nebyl nahrán žádný casopis</p>}
      />
    </main>
  );
};
