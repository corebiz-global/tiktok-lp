import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { CustomCode } from "@/components/shared/custom-code";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useTranslation } from "react-i18next";

export function Afiliado() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);
  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="afiliado" id="afiliado">
      <CustomAccordionTrigger>{t("afiliado.trigger")}</CustomAccordionTrigger>
      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          <li>{t("afiliado.steps.admin")}</li>
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
                <CustomCode code={`https://${account}.myvtex.com/corebiz.tiktok-connector/vtex`} />
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
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
