"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import logoSrc from "../../../public/assets/images/logo-corebiz.png";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

export function HeaderDesktop() {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex mx-auto h-full max-w-6xl items-center justify-between px-6">
      <Link href="/" className="flex items-center">
        <Image
          src={logoSrc}
          alt="Logo da Corebiz"
          width={120}
          className="h-8 w-auto object-contain invert-100"
          priority
        />
      </Link>

      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-neutral-100 hover:text-white">
            {t("header.nav.home")}
          </Link>
          <Link href="/docs" className="text-sm font-medium text-neutral-100 hover:text-white">
            {t("header.nav.docs")}
          </Link>
          <Link href="/contacts" className="text-sm font-medium text-neutral-100 hover:text-white">
            {t("header.nav.contact")}
          </Link>
        </nav>

        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
