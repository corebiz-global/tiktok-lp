import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { useTranslation } from "react-i18next";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { CustomCode } from "@/components/shared/custom-code";

export function LogisticsMapping() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="logistics-mapping" id="logistics-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.logisticsMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <div className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.logisticsMapping.access.title")}</h4>
          <p className="text-sm text-muted-foreground">{t("mapeamentoDeCampos.logisticsMapping.access.description")}</p>
          <CustomCode code={`https://${account}.myvtex.com/admin/corebiz/logistics-mapper`} />
          <p className="text-xs mt-1 text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
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
