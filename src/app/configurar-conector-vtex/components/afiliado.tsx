import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { CustomAccountLink } from "@/components/shared/custom-account-link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import afiliadoImage from "../../../../public/assets/images/novo-afiliado.png";

export function Afiliado() {
  const { t } = useTranslation();

  return (
    <CustomAccordionItem value="afiliado" id="afiliado">
      <CustomAccordionTrigger>{t("afiliado.trigger")}</CustomAccordionTrigger>
      <CustomAccordionContent className="flex md:flex-row flex-col gap-4">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            {t("afiliado.steps.admin")}
            <CustomAccountLink path="admin/checkout#/affiliates/new" />
          </li>
          <li>{t("afiliado.steps.tab")}</li>
          <li>{t("afiliado.steps.new")}</li>
          <li>
            {t("afiliado.steps.fields")}
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>{t("afiliado.fields.name")}:</strong> {t("afiliado.values.name")}
              </li>
              <li>
                <strong>{t("afiliado.fields.id")}:</strong> {t("afiliado.values.id")}
              </li>
              <li>
                <strong>{t("afiliado.fields.policy")}:</strong> {t("afiliado.values.policy")}
              </li>
              <li>
                <strong>{t("afiliado.fields.email")}:</strong> {t("afiliado.values.email")}
              </li>
              <li>
                <strong>{t("afiliado.fields.endpoint")}: </strong>
                <CustomAccountLink path="corebiz.tiktok-connector/vtex" />
              </li>
              <li>
                <strong>{t("afiliado.fields.searchEndpoint")}:</strong> {t("afiliado.values.searchEndpoint")}
              </li>
              <li>
                <strong>{t("afiliado.fields.paymentMethod")}:</strong> {t("afiliado.values.paymentMethod")}
              </li>
            </ul>
          </li>
          <li>{t("afiliado.steps.save")}</li>
        </ol>
        <Image src={afiliadoImage} alt="Afiliado VTEX" className="h-full max-h-[440px] object-contain" />
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
