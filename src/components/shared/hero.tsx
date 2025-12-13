"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Globe, RefreshCcw, LayoutDashboard, Sparkles } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

type Benefit = {
  key: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    key: "globalReach",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    key: "fullSync",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
  {
    key: "simplifiedManagement",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    key: "smoothExperience",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("hero.title")}</h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{t("hero.description")}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-2xl">
            <Link href="#pre-requisitos">{t("hero.cta.prerequisites")}</Link>
          </Button>

          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="#guia">{t("hero.cta.guide")}</Link>
          </Button>
        </div>
      </section>
      <Separator className="my-10" />
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">{t("hero.benefits.title")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((b) => (
            <Card key={b.key} className="rounded-2xl">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  {b.icon}
                  <CardTitle className="text-base">{t(`hero.benefits.items.${b.key}.title`)}</CardTitle>
                </div>

                <CardDescription className="text-sm">{t(`hero.benefits.items.${b.key}.description`)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <Separator className="my-10" />
    </>
  );
}
