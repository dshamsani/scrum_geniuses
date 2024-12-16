import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

import { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  category: "zajimave" | "ruzne" | "historie" | undefined;
  setCategory: Dispatch<SetStateAction<"zajimave" | "ruzne" | "historie" | undefined>>;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const CategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [category, setCategory] = useState<"zajimave" | "ruzne" | "historie">();

  return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>;
};

export const useCategory = (): CategoryContextProps => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
