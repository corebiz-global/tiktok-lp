"use client";
import { useTranslation, Trans } from "react-i18next";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import numRastreio from "../../../public/assets/images/numero-de-rastreio.png";
import rastreamento from "../../../public/assets/images/rastreamento.png";

import { HeaderSection } from "@/components/shared/header-section";
import { CustomImage } from "@/components/shared/custom-image";

export default function EtiquetaDeEnvio() {
  const { t } = useTranslation();

  const steps = [
    t("shippingLabel.steps.step1"),
    t("shippingLabel.steps.step2"),
    t("shippingLabel.steps.step3"),
    t("shippingLabel.steps.step4"),
  ];

  return (
    <section className="space-y-6">
      <HeaderSection
        title={t("shippingLabel.title")}
        description={t("shippingLabel.description")}
        badge={t("commons.vtex.badge")}
      />

      <Card className="rounded-2xl overflow-hidden">
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>{t("shippingLabel.howToView")}</p>

          <ol className="space-y-2 pl-4 list-decimal">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <CustomImage src={numRastreio} alt="Número de Rastreio" />

          <p>
            <Trans i18nKey="shippingLabel.afterClick" />
          </p>

          <CustomImage src={rastreamento} alt="Rastreamento" />

          <Alert className="rounded-2xl">
            <TriangleAlertIcon className="h-4 w-4" />
            <AlertTitle>{t("shippingLabel.important.title")}</AlertTitle>
            <AlertDescription>
              <span>
                <Trans i18nKey="shippingLabel.important.description" />
              </span>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="rounded-2xl">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>{t("shippingLabel.note.title")}</AlertTitle>
        <AlertDescription>
          <span>
            <Trans i18nKey="shippingLabel.note.description" />
          </span>
        </AlertDescription>
      </Alert>
    </section>
  );
}
