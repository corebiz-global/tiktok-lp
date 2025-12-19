"use client";
import { useTranslation } from "react-i18next";

import { HeaderSection } from "@/components/shared/header-section";
import { CustomAccordion } from "@/components/shared/custom-accordion";
import { useHash } from "@/hooks/use-hash";

import { BrandMapping } from "./components/brand-mapping";
import { CategoryMapping } from "./components/category-mapping";
import { LogisticsMapping } from "./components/logistics-mapping";

export default function MapeamentoDeCampos() {
  const { t } = useTranslation();
  const { hash, handleHashChange } = useHash();

  return (
    <section className="space-y-4">
      <HeaderSection
        title={t("mapeamentoDeCampos.title")}
        description={t("mapeamentoDeCampos.description")}
        badge={t("commons.vtex.badge")}
      />

      <CustomAccordion type="single" collapsible className="space-y-4" value={hash} onValueChange={handleHashChange}>
        <BrandMapping />
        <CategoryMapping />
        <LogisticsMapping />
      </CustomAccordion>
    </section>
  );
}
