import type {FC, ReactNode} from "react"

import { LayoutHeader } from "./LayoutHeader"
import { LayoutFooter } from "./LayoutFooter";

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className="max-w-[1350px] mx-auto">
      <LayoutHeader />
      <main>
        {children}
      </main>
      <LayoutFooter />
    </div>
  )
};
