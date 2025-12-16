import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from "react-i18next";
import { InfoIcon } from "lucide-react";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { CustomCode } from "@/components/shared/custom-code";

export function BrandMapping() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="brand-mapping" id="brand-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.brandMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.brandMapping.access.title")}</h4>
          <p className="text-sm text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.description")}</p>
          <CustomCode code={`https://${account}.myvtex.com/admin/corebiz/brand-mapper`} />
          <p className="text-xs mt-1 text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
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
