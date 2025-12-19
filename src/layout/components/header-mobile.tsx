"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import logoSrc from "../../../public/assets/images/logo-corebiz.png";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function HeaderMobile() {
  const { t } = useTranslation();

  return (
    <div className="flex md:hidden h-full items-center justify-between px-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={logoSrc}
          alt="Logo da Corebiz"
          width={120}
          className="h-8 w-auto object-contain invert-100"
          priority
        />
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />

        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button size="icon" aria-label={t("header.menu")} className="text-neutral-100 hover:text-white ">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="right-0 left-auto h-full w-72 rounded-none border-0 bg-neutral-900">
            <DrawerHeader className="flex items-end">
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
              <DrawerClose asChild>
                <Button size="icon" aria-label={t("commons.close")} className="text-neutral-100 hover:text-white">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            {/* NAV */}
            <nav className="mt-4 flex flex-col gap-4 px-6">
              <DrawerClose asChild>
                <Link href="/" className="text-base font-medium text-neutral-100 hover:text-white">
                  {t("header.nav.home")}
                </Link>
              </DrawerClose>

              <DrawerClose asChild>
                <Link href="/docs" className="text-base font-medium text-neutral-100 hover:text-white">
                  {t("header.nav.docs")}
                </Link>
              </DrawerClose>

              <DrawerClose asChild>
                <Link href="/contacts" className="text-base font-medium text-neutral-100 hover:text-white">
                  {t("header.nav.contact")}
                </Link>
              </DrawerClose>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
