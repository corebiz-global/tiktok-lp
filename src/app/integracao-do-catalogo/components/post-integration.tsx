import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { useTranslation } from "react-i18next";

export function PostIntegration() {
  const { t } = useTranslation();
  return (
    <CustomAccordionItem value="post-integration" id="post-integration">
      <CustomAccordionTrigger>{t("integration.steps.postIntegration.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>{t("integration.steps.postIntegration.intro")}</p>

        <h4 className="mt-4 font-medium">{t("integration.steps.postIntegration.stockPrice.title")}</h4>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.postIntegration.stockPrice.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4 className="mt-4 font-medium">{t("integration.steps.postIntegration.shippingLabels.title")}</h4>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.postIntegration.shippingLabels.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4 className="mt-4 font-medium">{t("integration.steps.postIntegration.freeSamples.title")}</h4>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          {(
            t("integration.steps.postIntegration.freeSamples.list", {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4 className="mt-4 font-medium">{t("integration.steps.postIntegration.returns.title")}</h4>
        <p className="mt-2">{t("integration.steps.postIntegration.returns.description")}</p>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
