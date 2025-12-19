import { AlertCircle } from "lucide-react";
import { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EmailContact } from "@/components/shared/email-contact";
import { useTranslation } from "react-i18next";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}

export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader className="flex items-center gap-2">
        {icon}
        <h2 className="text-base font-medium">{title}</h2>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-4">{children}</CardContent>
    </Card>
  );
}
export function Contacts() {
  const { t } = useTranslation();
  return (
    <div className="space-y-5">
      <InfoCard icon={<AlertCircle className="h-5 w-5" />} title={t("onboardingCompleted.commercialActivation.title")}>
        <p>{t("onboardingCompleted.commercialActivation.description")}</p>

        <EmailContact
          label={t("onboardingCompleted.commercialActivation.contactLabel")}
          email="comercial.tiktok@corebiz.ag"
        />
      </InfoCard>
      <InfoCard title={t("onboardingCompleted.support.title")}>
        <p>{t("onboardingCompleted.support.description")}</p>
        <EmailContact label={t("onboardingCompleted.support.contactLabel")} email="suporte.tiktok@corebiz.ag" />
      </InfoCard>
    </div>
  );
}
