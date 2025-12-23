import { useTranslation, Trans } from "react-i18next";

import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { FaqSection } from "./faq-section";
import { RefreshCcwIcon, AlertTriangleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function Products() {
  const { t } = useTranslation();

  return (
    <FaqSection id="sync-and-samples" title={t("faq.products.title")} icon={RefreshCcwIcon}>
      {/* Sincronização */}
      <CustomAccordionItem value="product-sync">
        <CustomAccordionTrigger>{t("faq.products.sync.question")}</CustomAccordionTrigger>

        <CustomAccordionContent className="space-y-3">
          <p>
            <Trans i18nKey="faq.products.sync.paragraphs.intro" />
          </p>

          <p>
            <Trans i18nKey="faq.products.sync.paragraphs.updateFlow" />
          </p>

          <p>
            <Trans i18nKey="faq.products.sync.paragraphs.realtime" />
          </p>

          <Alert className="rounded-xl">
            <AlertTriangleIcon className="h-4 w-4" />
            <AlertTitle>{t("faq.products.sync.alert.title")}</AlertTitle>
            <AlertDescription>
              <p>
                <Trans i18nKey="faq.products.sync.alert.description" />
              </p>
            </AlertDescription>
          </Alert>
        </CustomAccordionContent>
      </CustomAccordionItem>

      {/* Amostras grátis */}
      <CustomAccordionItem value="free-samples">
        <CustomAccordionTrigger>{t("faq.products.samples.question")}</CustomAccordionTrigger>

        <CustomAccordionContent className="space-y-3">
          <p>{t("faq.products.samples.paragraphs.flow")}</p>

          <p>
            <Trans i18nKey="faq.products.samples.paragraphs.tracking" />
          </p>

          <p>{t("faq.products.samples.paragraphs.automation")}</p>

          <p>
            <Trans i18nKey="faq.products.samples.paragraphs.value" />
          </p>

          <Alert className="rounded-xl">
            <AlertTriangleIcon className="h-4 w-4" />
            <AlertTitle>{t("faq.products.samples.alert.title")}</AlertTitle>
            <AlertDescription>
              <p>
                <Trans i18nKey="faq.products.samples.alert.description" />
              </p>
            </AlertDescription>
          </Alert>
        </CustomAccordionContent>
      </CustomAccordionItem>
    </FaqSection>
  );
}
