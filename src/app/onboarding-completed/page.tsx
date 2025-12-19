"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Separator } from "@/components/ui/separator";
import { StepNavigation } from "@/components/shared/step-navigation";
import { Contacts } from "@/components/shared/contacts";

export default function OnboardingCompleted() {
  const { t } = useTranslation();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          {t("onboardingCompleted.title")}
        </h1>

        <p className="text-muted-foreground">{t("onboardingCompleted.description")}</p>
      </div>
      <Separator />
      <Contacts />
      <p className="text-sm text-muted-foreground">{t("onboardingCompleted.footer")}</p>
      <StepNavigation backHref="/configurar-credenciais-vtex" />
    </section>
  );
}
