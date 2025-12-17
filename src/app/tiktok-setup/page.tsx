"use client";

import { useTranslation } from "react-i18next";

import { SetupStepCard } from "@/components/shared/setup-step-card";

import installImage from "../../../public/assets/images/install-app-vtex-sync-tts.png";
import tokenImage from "../../../public/assets/images/gerar-token.png";
import { StepNavigation } from "@/components/shared/step-navigation";
import { HeaderSection } from "@/components/shared/header-section";

export default function TikTokShopSetup() {
  const { t } = useTranslation();

  const installSteps = t("tiktokSetup.install.steps", { returnObjects: true }) as string[];
  const tokenSteps = t("tiktokSetup.token.steps", { returnObjects: true }) as string[];

  return (
    <section className="space-y-6">
      <HeaderSection
        title={t("tiktokSetup.title")}
        description={t("tiktokSetup.description")}
        badge={t("commons.tiktok.badge")}
      />
      <div className="grid gap-6 md:grid-cols-2">
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
      </div>
      <StepNavigation backHref="/" continueHref="/criar-marca-tiktok" />
    </section>
  );
}
