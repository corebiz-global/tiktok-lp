"use client";

import { HeaderSection } from "@/components/shared/header-section";
import { StepNavigation } from "@/components/shared/step-navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import React from "react";
import { ShopIdInput } from "@/components/shared/shop-id-input";
import { CustomAccountLink } from "@/components/shared/custom-account-link";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{title}</h4>
      {children}
    </div>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

function FieldList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 space-y-1">{children}</ul>;
}

function FieldItem({ label, description }: { label: string; description: string }) {
  return (
    <li className="text-sm text-muted-foreground">
      <strong>{label}:</strong> {description}
    </li>
  );
}

export default function MapeamentoDeCampos() {
  const { t } = useTranslation();
  const base = "configCredenciasVtex";

  return (
    <div className="space-y-4">
      <HeaderSection
        title={t(`${base}.title`)}
        description={t(`${base}.description`)}
        badge={t("commons.vtex.badge")}
      />

      <Card className="rounded-2xl gap-2">
        <CardHeader>
          <CardTitle className="text-base">{t(`${base}.access.title`)}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <CustomAccountLink path="admin/corebiz/tiktok-connector" />
          <Description>{t(`${base}.intro`)}</Description>

          <Section title={t(`${base}.activation.title`)}>
            <Description>{t(`${base}.activation.toggle`)}</Description>
          </Section>

          <Section title={t(`${base}.vtexConfig.title`)}>
            <FieldList>
              <FieldItem
                label={t(`${base}.vtexConfig.fields.affiliate.label`)}
                description={t(`${base}.vtexConfig.fields.affiliate.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.endpoint.label`)}
                description={t(`${base}.vtexConfig.fields.endpoint.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.email.label`)}
                description={t(`${base}.vtexConfig.fields.email.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.policy.label`)}
                description={t(`${base}.vtexConfig.fields.policy.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.salesChannel.label`)}
                description={t(`${base}.vtexConfig.fields.salesChannel.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.key.label`)}
                description={t(`${base}.vtexConfig.fields.key.description`)}
              />
              <FieldItem
                label={t(`${base}.vtexConfig.fields.token.label`)}
                description={t(`${base}.vtexConfig.fields.token.description`)}
              />
            </FieldList>
          </Section>

          <Section title={t(`${base}.tiktokConfig.title`)}>
            <FieldList>
              <FieldItem
                label={t(`${base}.tiktokConfig.shopId.label`)}
                description={t(`${base}.tiktokConfig.shopId.description`)}
              />
              <ShopIdInput />
            </FieldList>
          </Section>

          <Section title={t(`${base}.catalogConfig.title`)}>
            <FieldList>
              <FieldItem
                label={t(`${base}.catalogConfig.variation.label`)}
                description={t(`${base}.catalogConfig.variation.description`)}
              />
            </FieldList>

            <Alert className="mt-3 rounded-xl">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>{t(`${base}.catalogConfig.limit`)}</AlertDescription>
            </Alert>
          </Section>
        </CardContent>
      </Card>

      <StepNavigation backHref="/configurar-conector-vtex" continueHref="/onboarding-completed" />
    </div>
  );
}
