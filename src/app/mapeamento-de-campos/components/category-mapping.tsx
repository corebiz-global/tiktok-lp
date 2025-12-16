import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { useTranslation } from "react-i18next";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { CustomCode } from "@/components/shared/custom-code";

export function CategoryMapping() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="category-mapping" id="category-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.categoryMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.categoryMapping.access.title")}</h4>
          <p className="text-sm text-muted-foreground">{t("mapeamentoDeCampos.categoryMapping.access.description")}</p>
          <CustomCode
            code={`https://${account}.myvtex.com/admin/mkp-category-mapper/1fc71fea-7e3d-4359-8ac4-83f5e3ae2047`}
          />
          <p className="text-xs mt-1 text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("commons.steps")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("mapeamentoDeCampos.categoryMapping.steps.tree")}</li>
            <li>{t("mapeamentoDeCampos.categoryMapping.steps.select")}</li>
            <li>{t("mapeamentoDeCampos.categoryMapping.steps.match")}</li>
            <li>{t("mapeamentoDeCampos.categoryMapping.steps.confirm")}</li>
            <li>{t("mapeamentoDeCampos.categoryMapping.steps.save")}</li>
          </ul>
        </section>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
