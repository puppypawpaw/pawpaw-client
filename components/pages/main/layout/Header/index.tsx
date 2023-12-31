'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/common';
import useGetPathname from '@/hooks/common/useGetPathname';
import Search from '@/public/svgs/sidebar/magnifying-glass.svg';
import Alert from '@/public/svgs/sidebar/bell.svg';
import Logo from '@/public/svgs/logo.svg';

export default function Header() {
  const pathname = useGetPathname();
  const headerClass = cn(
    'w-full tablet:hidden flex flex-row items-center justify-between border-b-[1px] border-grey-200 flex-nowrap h-[60px]  w-full bg-white z-10',
    pathname === 'Chat' ? 'hidden' : '',
  );
  return (
    <header className={headerClass}>
      <Link href="/" className="ml-5 sm:ml-10">
        <Logo className="w-20 h-[23.72px]" />
      </Link>
      <div className="flex flex-row mr-5 flex-nowra sm:mr-10">
        <Link href="/search" className="mr-[18px]">
          <Search className="w-6 h-6 fill-grey-500" />
        </Link>
        <Link href={pathname}>
          <Alert className="w-6 h-6 fill-grey-500" />
        </Link>
      </div>
    </header>
  );
}
