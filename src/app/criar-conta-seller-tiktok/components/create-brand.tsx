"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";

import minhaConta from "../../../../public/assets/images/minha-conta-tiktok.png";

export function CreateBrand() {
  const { t } = useTranslation();

  const steps = t("criarContaSeller.step2.steps", { returnObjects: true }) as string[];

  return (
    <section className="space-y-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>{t("criarContaSeller.step2.title")}</CardTitle>
          <CardDescription>{t("criarContaSeller.step2.description")}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>{t("criarContaSeller.step2.paragraphs.first")}</p>
          <p>{t("criarContaSeller.step2.paragraphs.second")}</p>

          <ol className="space-y-2 pl-4 list-decimal">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div className="overflow-hidden w-fit rounded-xl border">
            <Image src={minhaConta} alt={t("criarContaSeller.step2.imageAlt")} className="object-cover" width={400} />
          </div>

          <Alert className="rounded-2xl">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>{t("criarContaSeller.step2.alert.title")}</AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground">
              {t("criarContaSeller.step2.alert.description")}
            </AlertDescription>
          </Alert>

          <p className="text-sm">
            {t("criarContaSeller.step2.footer.before")}{" "}
            <a
              href="https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=5407942887311105&from=policy"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              {t("criarContaSeller.step2.footer.link")}
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
