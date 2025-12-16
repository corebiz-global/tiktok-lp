import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Installation() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="instalacao">
      <CustomAccordionTrigger>{t("installation.trigger")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          <li>{t("installation.steps.apps")}</li>
          <li>{t("installation.steps.search")}</li>
          <li>{t("installation.steps.install")}</li>
        </ol>

        <Alert className="mt-4 rounded-xl">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>{t("installation.alert.title")}</AlertTitle>
          <AlertDescription>{t("installation.alert.description")}</AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
