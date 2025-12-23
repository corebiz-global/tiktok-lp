import { useTranslation } from "react-i18next";

import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { UsersIcon } from "lucide-react";
import { FaqSection } from "./faq-section";

export function Clients() {
  const { t } = useTranslation();

  return (
    <FaqSection id="clients" title={t("faq.clients.title")} icon={UsersIcon}>
      <CustomAccordion type="multiple">
        <CustomAccordionItem value="customers">
          <CustomAccordionTrigger>{t("faq.clients.customers.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>{t("faq.clients.customers.answer")}</p>
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </FaqSection>
  );
}
