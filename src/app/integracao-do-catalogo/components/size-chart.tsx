import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Trans, useTranslation } from "react-i18next";

export function SizeChart() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="fashion" id="fashion">
      <CustomAccordionTrigger>{t("integration.steps.fashion.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.fashion.description" />
        </p>

        <p className="mt-3">
          <Trans i18nKey="integration.steps.fashion.upload" />
        </p>

        <p className="mt-2 text-sm">{t("integration.steps.fashion.pathLabel")}</p>

        <pre className="mt-2 rounded-xl bg-muted p-4 text-xs">{t("integration.steps.fashion.path")}</pre>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
