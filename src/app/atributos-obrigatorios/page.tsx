"use client";

import { Trans, useTranslation } from "react-i18next";

import { CustomAccordion } from "@/components/shared/custom-accordion";
import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { HeaderSection } from "@/components/shared/header-section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangleIcon, InfoIcon } from "lucide-react";

const recommendedAgeValues = [
  "3 - 4 anos",
  "4 - 5 anos",
  "5 - 6 anos",
  "6 - 7 anos",
  "7 - 8 anos",
  "8 - 9 anos",
  "9 - 10 anos",
  "10 - 11 anos",
  "11 - 12 anos",
  "12 - 13 anos",
  "13 - 14 anos",
];

function TransList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item) => (
        <li key={item}>
          <Trans>{item}</Trans>
        </li>
      ))}
    </ul>
  );
}

function TransSteps({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal pl-5 space-y-2">
      {items.map((item) => (
        <li key={item}>
          <Trans>{item}</Trans>
        </li>
      ))}
    </ol>
  );
}

export default function AtributosObrigatorios() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4 pb-28">
      <HeaderSection
        title={t("mandatoryAttributesPage.title")}
        description={t("mandatoryAttributesPage.description")}
        badge={t("commons.vtex.badge")}
      />

      <Alert className="rounded-xl">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>{t("mandatoryAttributesPage.intro.title")}</AlertTitle>
        <AlertDescription>
          <p>
            <Trans i18nKey="mandatoryAttributesPage.intro.description" />
          </p>
        </AlertDescription>
      </Alert>

      <CustomAccordion type="single" collapsible defaultValue="how-to-create" className="space-y-4">
        <CustomAccordionItem value="how-to-create" id="how-to-create">
          <CustomAccordionTrigger>{t("mandatoryAttributesPage.howToCreate.title")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p className="mb-4">
              <Trans i18nKey="mandatoryAttributesPage.howToCreate.description" />
            </p>

            <TransSteps
              items={
                t("mandatoryAttributesPage.howToCreate.steps", {
                  returnObjects: true,
                }) as string[]
              }
            />
          </CustomAccordionContent>
        </CustomAccordionItem>

        <CustomAccordionItem value="cosmetics" id="cosmetics">
          <CustomAccordionTrigger>{t("mandatoryAttributesPage.cosmetics.title")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p className="mb-4">
              <Trans i18nKey="mandatoryAttributesPage.cosmetics.description" />
            </p>

            <TransList
              items={
                t("mandatoryAttributesPage.cosmetics.items", {
                  returnObjects: true,
                }) as string[]
              }
            />

            <Alert className="mt-4 rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>{t("mandatoryAttributesPage.cosmetics.alertTitle")}</AlertTitle>
              <AlertDescription>
                <p>
                  <Trans i18nKey="mandatoryAttributesPage.cosmetics.alertDescription" />
                </p>
              </AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>

        <CustomAccordionItem value="kids-clothing" id="kids-clothing">
          <CustomAccordionTrigger>{t("mandatoryAttributesPage.kidsClothing.title")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p className="mb-4">
              <Trans i18nKey="mandatoryAttributesPage.kidsClothing.description" />
            </p>

            <TransList
              items={
                t("mandatoryAttributesPage.kidsClothing.items", {
                  returnObjects: true,
                }) as string[]
              }
            />

            <div className="mt-5">
              <h4 className="mb-3 font-semibold text-foreground">
                {t("mandatoryAttributesPage.kidsClothing.valuesTitle")}
              </h4>

              <div className="flex flex-wrap gap-2">
                {recommendedAgeValues.map((value) => (
                  <Badge key={value} variant="secondary" className="rounded-full font-mono">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            <Alert className="mt-4 rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>{t("mandatoryAttributesPage.kidsClothing.alertTitle")}</AlertTitle>
              <AlertDescription>
                <p>
                  <Trans i18nKey="mandatoryAttributesPage.kidsClothing.alertDescription" />
                </p>
              </AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>

        <CustomAccordionItem value="product-certifications" id="product-certifications">
          <CustomAccordionTrigger>{t("mandatoryAttributesPage.productCertification.title")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p className="mb-4">
              <Trans i18nKey="mandatoryAttributesPage.productCertification.description" />
            </p>

            <TransSteps
              items={
                t("mandatoryAttributesPage.productCertification.steps", {
                  returnObjects: true,
                }) as string[]
              }
            />
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </section>
  );
}
