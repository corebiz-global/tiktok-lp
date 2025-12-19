import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Trans, useTranslation } from "react-i18next";

export function Dashboard() {
  const { t } = useTranslation();
  return (
    <CustomAccordionItem value="dashboard" id="dashboard">
      <CustomAccordionTrigger>{t("integration.steps.dashboard.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.dashboard.description" />
        </p>

        <p className="mt-3">{t("integration.steps.dashboard.listIntro")}</p>

        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.dashboard.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
