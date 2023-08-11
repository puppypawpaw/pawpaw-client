'use client';

import { useState } from 'react';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? 'w-64' : 'w-24';

  return (
    <>
      <nav
        className={`sticky top-0 h-screen left-0 ${desktopWidth}  bg-[#F7F8F9] invisible tablet:visible`}
      >
        <SidebarLogo desktopWidth={toggle} />
        <SideButtonContainer desktopWidth={toggle} />
        <BottomToggle
          desktopWidth={toggle}
          onClick={() => setToggle(!toggle)}
        />
      </nav>
      <ResponsiveNavbar />
    </>
  );
}
