import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

import { CustomAccountLink } from "@/components/shared/custom-account-link";
import { useTranslation } from "react-i18next";

export function BrandMapping() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="brand-mapping" id="brand-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.brandMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.brandMapping.access.title")}</h4>
          <CustomAccountLink
            path="admin/corebiz/brand-mapper"
            label={t("mapeamentoDeCampos.brandMapping.access.description")}
          />
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("commons.steps")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("mapeamentoDeCampos.brandMapping.steps.list")}</li>
            <li>{t("mapeamentoDeCampos.brandMapping.steps.select")}</li>
            <li>{t("mapeamentoDeCampos.brandMapping.steps.auth")}</li>
            <li>{t("mapeamentoDeCampos.brandMapping.steps.save")}</li>
          </ul>
        </section>
        <p>{t("mapeamentoDeCampos.brandMapping.rules.block")}</p>
        <Alert className="rounded-xl">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>{t("mapeamentoDeCampos.brandMapping.rules.limit")}</AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
