import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Trans, useTranslation } from "react-i18next";

export function ProductCertifications() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="product-certifications" id="product-certifications">
      <CustomAccordionTrigger>{t("integration.steps.productCertification.title")}</CustomAccordionTrigger>

      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.productCertification.description" />
        </p>

        <div className="mt-6 space-y-3">
          <h4 className="font-semibold">{t("integration.steps.productCertification.howTo.title")}</h4>

          <ol className="list-decimal pl-5 space-y-2">
            {(
              t("integration.steps.productCertification.howTo.steps", {
                returnObjects: true,
              }) as string[]
            ).map((step: string, index: number) => (
              <li key={index}>
                <Trans>{step}</Trans>
              </li>
            ))}
          </ol>
        </div>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
