"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";

import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import criarConta from "../../../../public/assets/images/criar-conta-seller.png";

export function CreateAccount() {
  const { t } = useTranslation();

  const accountOptions = t("criarContaSeller.step1.accountOptions", { returnObjects: true }) as string[];
  const documents = t("criarContaSeller.step1.documents.items", { returnObjects: true }) as string[];
  return (
    <section className="space-y-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>{t("criarContaSeller.step1.title")}</CardTitle>
          <CardDescription>{t("criarContaSeller.step1.description")}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            {t("criarContaSeller.step1.intro.before")}
            <strong>{t("criarContaSeller.step1.intro.highlight")}</strong>.{t("criarContaSeller.step1.intro.after")}
          </p>

          <ul className="space-y-2">
            {accountOptions.map((item: string) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2Icon className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden w-fit rounded-xl border">
            <Image
              src={criarConta}
              alt={t("criarContaSeller.step1.imageAlt")}
              className="object-cover"
              width={400}
              priority
            />
          </div>

          <p className="text-neutral-900 font-semibold text-base">{t("criarContaSeller.step1.documents.title")}</p>

          {documents.map((item: string) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle2Icon className="mt-0.5 h-4 w-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
