import {
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/shared/custom-accordion";
import { useTranslation } from "react-i18next";

import { CustomAccountLink } from "@/components/shared/custom-account-link";

export function CategoryMapping() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="category-mapping" id="category-mapping">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.categoryMapping.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.categoryMapping.access.title")}</h4>
          <CustomAccountLink
            path="admin/corebiz/admin/mkp-category-mapper/1fc71fea-7e3d-4359-8ac4-83f5e3ae2047"
            label={t("mapeamentoDeCampos.categoryMapping.access.description")}
          />
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
