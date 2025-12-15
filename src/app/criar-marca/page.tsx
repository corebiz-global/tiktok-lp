"use client";
import { useTranslation } from "react-i18next";

import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StepNavigation } from "@/components/shared/step-navigation";
import minhaConta from "../../../public/assets/images/minha-conta-tiktok.png";
import { HeaderSection } from "@/components/shared/header-section";

export default function CriarMarca() {
  const { t } = useTranslation();

  const brandSteps = t("tiktokSetup.brands.steps", { returnObjects: true }) as string[];

  return (
    <section className="space-y-6 pb-7">
      <Badge variant="secondary" className="rounded-full">
        {t("criarContaSeller.hero.badge")}
      </Badge>

      <HeaderSection title={t("tiktokSetup.brands.title")} description={t("tiktokSetup.brands.description")} />

      <Card className="rounded-2xl overflow-hidden">
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ol className="space-y-2 pl-4 list-decimal">
            {brandSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div className="overflow-hidden w-fit rounded-xl border">
            <Image src={minhaConta} alt={t("tiktokSetup.brands.imageAlt")} className="object-cover" width={400} />
          </div>
        </CardContent>
      </Card>
      <Alert className="rounded-2xl">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>{t("tiktokSetup.tip.title")}</AlertTitle>
        <AlertDescription>{t("tiktokSetup.tip.description")}</AlertDescription>
      </Alert>

      <p className="text-sm text-muted-foreground">
        {t("tiktokSetup.footer.before")}{" "}
        <a
          href="https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=5407942887311105"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          {t("tiktokSetup.footer.link")}
        </a>
        .
      </p>
      <StepNavigation backHref="/tiktok-setup" continueHref="/configurar-conector-vtex" />
    </section>
  );
}
