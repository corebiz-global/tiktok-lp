import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AppKeys() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="app-key" id="app-key">
      <CustomAccordionTrigger>{t("appKeys.trigger")}</CustomAccordionTrigger>
      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          <li>{t("appKeys.steps.admin")}</li>
          <li>{t("appKeys.steps.profile")}</li>
          <li>{t("appKeys.steps.settings")}</li>
          <li>{t("appKeys.steps.manage")}</li>
          <li>{t("appKeys.steps.generate")}</li>
          <li>
            {t("appKeys.steps.label")}: <strong>{t("appKeys.steps.labelExample")}</strong>
          </li>
          <li>{t("appKeys.steps.role")}</li>
          <li>{t("appKeys.steps.confirm")}</li>
        </ol>
        <Alert className="mt-4 rounded-xl">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>{t("appKeys.alert.title")}</AlertTitle>
          <AlertDescription>{t("appKeys.alert.description")}</AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
