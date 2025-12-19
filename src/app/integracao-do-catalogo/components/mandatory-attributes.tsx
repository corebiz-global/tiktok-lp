import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function MandatoryAttributes() {
  const { t } = useTranslation();
  return (
    <CustomAccordionItem value="required-attributes" id="required-attributes">
      <CustomAccordionTrigger>{t("integration.steps.requiredAttributes.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>{t("integration.steps.requiredAttributes.description")}</p>

        <p className="mt-3">
          <strong>{t("integration.steps.requiredAttributes.example")}</strong>
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.requiredAttributes.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>

        <Alert className="mt-4 rounded-xl">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>{t("integration.steps.requiredAttributes.alertTitle")}</AlertTitle>
          <AlertDescription>{t("integration.steps.requiredAttributes.alertDescription")}</AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
