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
    <CustomAccordionItem value="app-key">
      <CustomAccordionTrigger>{t("appKeys.trigger")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          {(t("appKeys.steps", { returnObjects: true }) as string[]).map((step: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
          ))}
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
