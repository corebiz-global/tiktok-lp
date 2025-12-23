import { useTranslation } from "react-i18next";

import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { BriefcaseIcon } from "lucide-react";
import { FaqSection } from "./faq-section";

export function CommercialStrategy() {
  const { t } = useTranslation();

  return (
    <FaqSection id="commercial-strategy" title={t("faq.commercial.title")} icon={BriefcaseIcon}>
      <CustomAccordion type="multiple">
        <CustomAccordionItem value="policy">
          <CustomAccordionTrigger>{t("faq.commercial.policy.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>{t("faq.commercial.policy.answer")}</p>
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </FaqSection>
  );
}
