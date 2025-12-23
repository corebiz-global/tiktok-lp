import { useTranslation, Trans } from "react-i18next";

import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon, PackageIcon } from "lucide-react";
import { FaqSection } from "./faq-section";

export function Logistics() {
  const { t } = useTranslation();

  return (
    <FaqSection id="logistics" title={t("faq.logistics.title")} icon={PackageIcon}>
      <CustomAccordion type="multiple" className="space-y-3">
        {/* Método de envio */}
        <CustomAccordionItem value="shipping-method">
          <CustomAccordionTrigger>{t("faq.logistics.shippingMethod.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              <Trans i18nKey="faq.logistics.shippingMethod.answer" />
            </p>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* Transportadoras */}
        <CustomAccordionItem value="carriers">
          <CustomAccordionTrigger>{t("faq.logistics.carriers.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>{t("faq.logistics.carriers.list")}</p>
            <p>{t("faq.logistics.carriers.note")}</p>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* Status de entrega */}
        <CustomAccordionItem value="delivery-status">
          <CustomAccordionTrigger>{t("faq.logistics.deliveryStatus.question")}</CustomAccordionTrigger>
          <CustomAccordionContent>
            <Alert className="rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>{t("faq.logistics.deliveryStatus.alertTitle")}</AlertTitle>
              <AlertDescription>{t("faq.logistics.deliveryStatus.alertDescription")}</AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </FaqSection>
  );
}
