"use client";

import { useTranslation } from "react-i18next";

import { HeaderSection } from "@/components/shared/header-section";
import { CustomAccordion } from "@/components/shared/custom-accordion";
import { StartIntegration } from "./components/start-integration";
import { DailyLimit } from "./components/daily-limit";
import { Variations } from "./components/variations";
import { MandatoryAttributes } from "./components/mandatory-attributes";
import { SizeChart } from "./components/size-chart";
import { Dashboard } from "./components/dashboard";
import { PostIntegration } from "./components/post-integration";

export default function Integration() {
  const { t } = useTranslation();

  return (
    <section className="space-y-6 pb-28">
      <HeaderSection title={t("integration.title")} description={t("integration.description")} />

      <CustomAccordion type="single" collapsible defaultValue="start-integration" className="space-y-4">
        <StartIntegration />
        <DailyLimit />
        <Variations />
        <MandatoryAttributes />
        <SizeChart />
        <Dashboard />
        <PostIntegration />
      </CustomAccordion>
    </section>
  );
}
