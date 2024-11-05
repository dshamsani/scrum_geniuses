import type { FC, ReactNode } from "react";

import { LayoutHeader } from "./LayoutHeader";
import { LayoutFooter } from "./LayoutFooter";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <main className='min-h-minHeight'>{children}</main>
      <LayoutFooter />
    </>
  );
};
