import type { FC } from "react";

import RedLogo from "@/resources/red-logo.svg";
import PhoneIcon from "@/resources/icons/phone.svg";

export const LayoutHeader: FC = () => {
  return (
    <header className='flex h-[130px] items-center justify-between px-mobile lg:px-desktop'>
      <img src={RedLogo} alt='Logo' className='w-fit' height={130} />
      <div className='flex items-center gap-6 text-[15px] font-semibold md:gap-12'>
        <span className='cursor-pointer border-b-2 border-transparent transition-all duration-150 hover:border-[#B00000]'>
          O nás
        </span>
        <span className='cursor-pointer border-b-2 border-transparent transition-all duration-150 hover:border-[#B00000]'>
          Ceník
        </span>
        <span className='cursor-pointer border-b-2 border-transparent transition-all duration-150 hover:border-[#B00000]'>
          Kontakty
        </span>
      </div>
      <div className='flex items-center gap-4 border-l pl-[14px]'>
        <img src={PhoneIcon} alt='Phone' width={20} height={20} />
        <span className='hidden font-semibold lg:inline'>
          +420*************
        </span>
      </div>
    </header>
  );
};
