import { useTranslation, Trans } from "react-i18next";

import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { WalletIcon } from "lucide-react";
import { FaqSection } from "./faq-section";

export function Payments() {
  const { t } = useTranslation();

  return (
    <FaqSection id="payments" title={t("faq.payments.title")} icon={WalletIcon}>
      <CustomAccordion type="multiple">
        <CustomAccordionItem value="payment">
          <CustomAccordionTrigger>{t("faq.payments.payment.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              <Trans i18nKey="faq.payments.payment.answer" />
            </p>
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </FaqSection>
  );
}
