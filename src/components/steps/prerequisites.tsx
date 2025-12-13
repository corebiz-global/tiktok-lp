"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Info } from "lucide-react";

import { Hero } from "../shared/hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

import { twMerge } from "tailwind-merge";

type GuideStepItemProps = {
  step: number;
  title: string;
  description: string;
  active?: boolean;
};

function GuideStepItem({ step, title, description, active = false }: GuideStepItemProps) {
  return (
    <div className={twMerge("flex items-start gap-3", !active && "opacity-60")}>
      <div className="mt-0.5 rounded-full border px-2 py-0.5 text-xs">{step}</div>

      <div className="space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

type Prereq = {
  key: string;
  ctaHref?: string;
};

const prereqs: Prereq[] = [
  {
    key: "vtexAccount",
  },
  {
    key: "tiktokSeller",
    ctaHref: "/criar-conta-seller-tiktok",
  },
];

export default function PreRequisites() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-4 md:px-6">
      <Hero />

      <section id="guia" className="grid gap-6 lg:grid-cols-3">
        {/* Guia lateral */}
        <Card className="rounded-2xl lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">{t("preRequisites.guide.title")}</CardTitle>
            <CardDescription>{t("preRequisites.guide.description")}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <GuideStepItem
              step={1}
              title={t("preRequisites.guide.steps.step1.title")}
              description={t("preRequisites.guide.steps.step1.description")}
              active
            />

            <GuideStepItem
              step={2}
              title={t("preRequisites.guide.steps.step2.title")}
              description={t("preRequisites.guide.steps.step2.description")}
            />

            <GuideStepItem
              step={3}
              title={t("preRequisites.guide.steps.step3.title")}
              description={t("preRequisites.guide.steps.step3.description")}
            />

            <Separator className="my-2" />

            <Button asChild variant="outline" className="w-full rounded-2xl">
              <Link href="#pre-requisitos">{t("preRequisites.guide.cta")}</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card id="pre-requisitos" className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">{t("preRequisites.content.title")}</CardTitle>
              <CardDescription>{t("preRequisites.content.description")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {prereqs.map((p) => (
                  <div key={p.key} className="flex items-start gap-3 rounded-2xl border p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />

                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{t(`preRequisites.items.${p.key}.title`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`preRequisites.items.${p.key}.description`)}</p>

                      {p.ctaHref ? (
                        <div className="pt-2">
                          <Button asChild variant="secondary" className="rounded-2xl">
                            <Link href={p.ctaHref}>{t(`preRequisites.items.${p.key}.cta`)}</Link>
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              <Alert className="rounded-2xl">
                <Info className="h-4 w-4" />
                <AlertTitle>{t("preRequisites.alert.title")}</AlertTitle>
                <AlertDescription className="text-sm text-muted-foreground">
                  {t("preRequisites.alert.description")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{t("preRequisites.footer.text")}</p>
            <Button asChild className="rounded-2xl">
              <Link href="/step-2">{t("preRequisites.footer.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
