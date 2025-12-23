import { Trans, useTranslation } from "react-i18next";

import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "./faq-section";
import { Button } from "@/components/ui/button";

export function AccessAndConfig() {
  const { t } = useTranslation();

  return (
    <FaqSection title={t("faq.access.title")} icon={SettingsIcon} id="access-and-config">
      <CustomAccordionItem value="appkey">
        <CustomAccordionTrigger>{t("faq.access.appKey.question")}</CustomAccordionTrigger>
        <CustomAccordionContent>
          <Trans i18nKey="faq.access.appKey.answer" />
        </CustomAccordionContent>
      </CustomAccordionItem>

      <CustomAccordionItem value="integration-info">
        <CustomAccordionTrigger>{t("faq.access.integrationInfo.question")}</CustomAccordionTrigger>
        <CustomAccordionContent>
          <ul className="list-disc pl-5">
            <li>{t("faq.access.integrationInfo.items.tiktokToken")}</li>
            <li>{t("faq.access.integrationInfo.items.vtexKeys")}</li>
            <li>{t("faq.access.integrationInfo.items.tiktokAccountId")}</li>
            <li>{t("faq.access.integrationInfo.items.tradePolicy")}</li>
            <li>{t("faq.access.integrationInfo.items.orderPrefix")}</li>
          </ul>
        </CustomAccordionContent>
      </CustomAccordionItem>

      <CustomAccordionItem value="pre-config">
        <CustomAccordionTrigger>{t("faq.access.preConfig.question")}</CustomAccordionTrigger>
        <CustomAccordionContent>
          <p>{t("faq.access.preConfig.answer")}</p>

          <Button variant="link" className="p-0 mt-2">
            <Link href="/" className="underline">
              {t("faq.access.preConfig.link")}
            </Link>
          </Button>
        </CustomAccordionContent>
      </CustomAccordionItem>
    </FaqSection>
  );
}
