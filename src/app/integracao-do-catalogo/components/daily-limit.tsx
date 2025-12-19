import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function DailyLimit() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="limits" id="limits">
      <CustomAccordionTrigger>{t("integration.steps.limits.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <Alert className="rounded-xl">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>{t("integration.steps.limits.alertTitle")}</AlertTitle>
          <AlertDescription>
            <p>
              <Trans i18nKey="integration.steps.limits.alertDescription" />
            </p>
          </AlertDescription>
        </Alert>

        <p className="mt-4">{t("integration.steps.limits.moreThanLimit")}</p>

        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.limits.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
