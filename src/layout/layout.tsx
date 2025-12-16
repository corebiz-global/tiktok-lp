"use client";
import React from "react";
import { Header } from "./header";
import "@/locale/i18n";
type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="py-10 px-6 max-w-6xl mx-auto my-16 ">{children}</main>
    </>
  );
}
