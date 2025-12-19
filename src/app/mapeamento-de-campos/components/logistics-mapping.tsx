import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { useTranslation } from "react-i18next";

import { CustomAccountLink } from "@/components/shared/custom-account-link";

export function LogisticsMapping() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="logistics-mapping" id="logistics-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.logisticsMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <div className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.logisticsMapping.access.title")}</h4>
          <CustomAccountLink
            path="admin/corebiz/logistics-mapper"
            label={t("mapeamentoDeCampos.logisticsMapping.access.description")}
          />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">{t("commons.steps")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("mapeamentoDeCampos.logisticsMapping.steps.select")}</li>
            <li>{t("mapeamentoDeCampos.logisticsMapping.steps.context")}</li>
            <li>{t("mapeamentoDeCampos.logisticsMapping.steps.save")}</li>
          </ul>
        </div>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
