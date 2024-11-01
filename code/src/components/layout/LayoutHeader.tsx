import type {FC} from "react"

import RedLogo from '@/resources/red-logo.svg'
import PhoneIcon from '@/resources/icons/phone.svg'


export const LayoutHeader: FC = () => {

  return (
    <header className="h-[130px] flex items-center justify-between">
      <img src={RedLogo} alt="Logo" className="w-fit" height={130}  />
      <div className="flex items-center gap-12">
        <span className="text-[15px] font-semibold">O nás</span>
        <span className="text-[15px] font-semibold">Ceník</span>
        <span className="text-[15px] font-semibold">Kontakty</span>
      </div>
      <div className="border-l   flex items-center gap-4 pl-[14px]">
        <img src={PhoneIcon} alt="Phone" width={20} height={20} />
        <span className="font-semibold">+420*************</span>
      </div>
    </header>
  )
};
