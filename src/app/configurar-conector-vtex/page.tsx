"use client";
import { useTranslation } from "react-i18next";

import { CustomAccordion } from "@/components/shared/custom-accordion";
import { HeaderSection } from "@/components/shared/header-section";
import { AppKeys } from "./components/app-keys";
import { Afiliado } from "./components/afiliado";
import { Installation } from "./components/installation";
import { StepNavigation } from "@/components/shared/step-navigation";
import { useHash } from "@/hooks/use-hash";

export default function ConfigurarConectorVtex() {
  const { t } = useTranslation();
  const { hash, handleHashChange } = useHash();

  return (
    <section className="space-y-4">
      <HeaderSection
        title={t("configurarConectorVtex.title")}
        description={t("configurarConectorVtex.description")}
        badge={t("commons.vtex.badge")}
      />
      <CustomAccordion type="single" collapsible className="space-y-4" value={hash} onValueChange={handleHashChange}>
        <AppKeys />
        <Afiliado />
        <Installation />
      </CustomAccordion>
      <StepNavigation backHref="/criar-marca-tiktok" continueHref="/configurar-credenciais-vtex" />
    </section>
  );
}
