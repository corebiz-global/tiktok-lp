"use client";

import { useTranslation } from "react-i18next";
import { LinkIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <Badge variant="secondary" className="rounded-full">
        {t("criarContaSeller.hero.badge")}
      </Badge>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("criarContaSeller.hero.title")}</h1>
      <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{t("criarContaSeller.hero.description")}</p>
      <Button asChild className="rounded-2xl">
        <a href="https://seller.tiktok.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
          {t("criarContaSeller.hero.cta")}
          <LinkIcon className="h-4 w-4" />
        </a>
      </Button>
    </section>
  );
}
