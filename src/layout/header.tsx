"use client";

import { HeaderDesktop } from "./components/header-desktop";
import { HeaderMobile } from "./components/header-mobile";

export function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 h-16 w-full bg-neutral-900 shadow">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}
