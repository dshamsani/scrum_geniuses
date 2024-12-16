import type { FC } from "react";

import { useEffect } from "react";

export const Journal: FC = () => {
  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch(`https://admin.scrumgeniuses.cloud/items/vydani_casopisu?fields=Clanek.nazev`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res;
    };

    handleFetch()
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};
