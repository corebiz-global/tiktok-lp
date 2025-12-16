"use client";
import { useTranslation } from "react-i18next";

import { CustomAccordion } from "@/components/shared/custom-accordion";
import { HeaderSection } from "@/components/shared/header-section";
import { AppKeys } from "./components/app-keys";
import { Afiliado } from "./components/afiliado";
import { Installation } from "./components/installation";

export default function ConfigurarConectorVtex() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <HeaderSection title={t("configurarConectorVtex.title")} description={t("configurarConectorVtex.description")} />

      <CustomAccordion type="single" collapsible className="space-y-4">
        <AppKeys />
        <Afiliado />
        <Installation />
      </CustomAccordion>
    </section>
  );
}
