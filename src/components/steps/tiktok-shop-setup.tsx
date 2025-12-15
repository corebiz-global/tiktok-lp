"use client";

import { useTranslation } from "react-i18next";
import { Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "../ui/badge";
import { SetupStepCard } from "@/components/shared/setup-step-card";

import installImage from "../../../public/assets/images/install-app-vtex-sync-tts.png";
import tokenImage from "../../../public/assets/images/gerar-token.png";
import brandImage from "../../../public/assets/images/minha-conta-tiktok.png";

export function TikTokShopSetup({ nextStep }: { nextStep: () => void }) {
  const { t } = useTranslation();

  const installSteps = t("tiktokSetup.install.steps", { returnObjects: true }) as string[];
  const tokenSteps = t("tiktokSetup.token.steps", { returnObjects: true }) as string[];
  const brandSteps = t("tiktokSetup.brands.steps", { returnObjects: true }) as string[];

  return (
    <section className="space-y-6">
      <Badge variant="secondary" className="rounded-full">
        {t("criarContaSeller.hero.badge")}
      </Badge>

      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("tiktokSetup.title")}</h1>

      <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{t("tiktokSetup.description")}</p>

      <div className="space-y-4">
        <SetupStepCard
          title={t("tiktokSetup.install.title")}
          steps={installSteps}
          image={installImage}
          imageAlt={t("tiktokSetup.install.title")}
        />

        <SetupStepCard
          title={t("tiktokSetup.token.title")}
          steps={tokenSteps}
          image={tokenImage}
          imageAlt={t("tiktokSetup.token.title")}
        />

        <SetupStepCard
          title={t("tiktokSetup.brands.title")}
          steps={brandSteps}
          image={brandImage}
          imageAlt={t("tiktokSetup.brands.title")}
        />
      </div>

      <Alert className="rounded-2xl">
        <Info className="h-4 w-4" />
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
    </section>
  );
}
