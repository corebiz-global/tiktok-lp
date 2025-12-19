import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Trans, useTranslation } from "react-i18next";

export function StartIntegration() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="start-integration" id="start-integration">
      <CustomAccordionTrigger>{t("integration.steps.startIntegration.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.startIntegration.intro" />
        </p>

        <ol className="list-decimal space-y-2 pl-5 mt-4">
          {(
            t("integration.steps.startIntegration.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>
              <Trans>{item}</Trans>
            </li>
          ))}
        </ol>

        <div className="mt-4 space-y-3">
          <p>
            <strong>{t("integration.steps.startIntegration.optionsTitle")}</strong>
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Trans i18nKey="integration.steps.startIntegration.options.full" />
            </li>
            <li>
              <Trans i18nKey="integration.steps.startIntegration.options.collection" />
            </li>
          </ul>
        </div>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
