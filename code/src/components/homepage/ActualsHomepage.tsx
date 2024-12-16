import type { FC } from "react";
import type { Article } from "@/types/article";

import { PageHeader } from "../ui/PageHeader";
import { ArticleCard } from "../ui/ArticleCard";

import { useEffect, useState } from "react";

export const ActualsHomepage: FC = () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch(`https://admin.scrumgeniuses.cloud/items/Clanek?filter[status][_eq]=navrh`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res;
    };

    handleFetch()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <main className="py-[4px]">
      <PageHeader title="Aktuality" description="" />
      <div className="flex w-full p-desktop justify-center pb-10">
        <div className="max-w-[1350px] w-full flex flex-wrap gap-10">
          {(data ?? []).map(({ id, nazev, text_clanku, date_created }) => (
            <ArticleCard key={id} title={nazev} description={text_clanku} date={date_created} />
          ))}
        </div>
      </div>
    </main>
  );
};