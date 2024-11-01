import type { FC, ReactNode } from "react";

import { LayoutHeader } from "./LayoutHeader";
import { LayoutFooter } from "./LayoutFooter";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-[1350px]'>
      <LayoutHeader />
      <main className='min-h-minHeight'>{children}</main>
      <LayoutFooter />
    </div>
  );
};
