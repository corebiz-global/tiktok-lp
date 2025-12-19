import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function Variations() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="catalog-config" id="catalog-config">
      <CustomAccordionTrigger>{t("integration.steps.catalogConfig.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.catalogConfig.description" />
        </p>

        <p className="mt-3">{t("integration.steps.catalogConfig.exampleLabel")}</p>

        <pre className="mt-3 rounded-xl bg-muted p-4 text-xs">{t("integration.steps.catalogConfig.example")}</pre>

        <Alert className="mt-4 rounded-xl">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>{t("integration.steps.catalogConfig.alertTitle")}</AlertTitle>
          <AlertDescription>
            <p>
              <Trans i18nKey="integration.steps.catalogConfig.alertDescription" />
            </p>
          </AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
