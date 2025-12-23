"use client";

import { HeaderSection } from "@/components/shared/header-section";
import { AccessAndConfig } from "./components/access-and-config";
import { Clients } from "./components/clients";
import { CommercialStrategy } from "./components/commercial-strategy";
import { Payments } from "./components/payments";
import { Separator } from "@/components/ui/separator";
import { Logistics } from "./components/logistics";
import { Products } from "./components/products";
import { useTranslation } from "react-i18next";

export default function FaqPage() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 pb-28">
      <HeaderSection title={t("faq.title")} description={t("faq.description")} />
      <AccessAndConfig />
      <Separator />
      <Clients />
      <Separator />
      <CommercialStrategy />
      <Separator />
      <Payments />
      <Separator />
      <Logistics />
      <Separator />
      <Products />
    </section>
  );
}
