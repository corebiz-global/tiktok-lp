"use client";

import { AppKeys } from "./components/app-keys";
import { HeaderSection } from "@/components/shared/header-section";
import { CustomAccordion } from "@/components/shared/custom-accordion";
import { Afiliado } from "./components/afiliado";
import { Installation } from "./components/installation";

export default function ConfigurarConectorVtex() {
  return (
    <section className="space-y-4 ">
      <HeaderSection
        title="Configuração no VTEX Admin"
        description="Nesta etapa, você irá configurar sua conta VTEX para permitir a integração com o TikTok Shop por meio do conector Corebiz."
      />

      <CustomAccordion type="single" collapsible className="space-y-4">
        <AppKeys />
        <Afiliado />
        <Installation />
      </CustomAccordion>
    </section>
  );
}
