import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export function MandatoryAttributes() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="required-attributes" id="required-attributes">
      <CustomAccordionTrigger>{t("integration.steps.requiredAttributes.title")}</CustomAccordionTrigger>
      <CustomAccordionContent>
        <p>
          <Trans i18nKey="integration.steps.requiredAttributes.summary" />
        </p>

        <Button asChild className="mt-4">
          <Link href="/atributos-obrigatorios">
            {t("integration.steps.requiredAttributes.cta")}
            <ArrowRightIcon />
          </Link>
        </Button>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
