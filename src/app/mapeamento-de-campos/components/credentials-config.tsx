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

export function CredentialsConfig() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="credentials" id="credentials">
      <CustomAccordionTrigger>{t("mapeamentoDeCampos.credentials.title")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-6 pt-0">
        <div className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.credentials.access.title")}</h4>
          <p className="text-sm text-muted-foreground">{t("mapeamentoDeCampos.credentials.access.description")}</p>
          <CustomCode code={`https://${account}.myvtex.com/admin/corebiz/tiktok-connector`} />
          <p className="text-xs mt-1 text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
        </div>
        <p>{t("mapeamentoDeCampos.credentials.intro")}</p>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.credentials.activation.title")}</h4>
          <p>{t("mapeamentoDeCampos.credentials.activation.toggle")}</p>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.credentials.vtexConfig.title")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.affiliate.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.affiliate.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.endpoint.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.endpoint.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.email.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.email.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.policy.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.policy.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.salesChannel.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.salesChannel.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.key.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.key.description")}
            </li>

            <li>
              <strong>{t("mapeamentoDeCampos.credentials.vtexConfig.fields.token.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.vtexConfig.fields.token.description")}
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.credentials.tiktokConfig.title")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>{t("mapeamentoDeCampos.credentials.tiktokConfig.shopId.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.tiktokConfig.shopId.description")}
            </li>
          </ul>
          <Alert className="mt-3 rounded-xl">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>{t("mapeamentoDeCampos.credentials.tiktokConfig.helper")}</AlertDescription>
          </Alert>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">{t("mapeamentoDeCampos.credentials.catalogConfig.title")}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>{t("mapeamentoDeCampos.credentials.catalogConfig.variation.label")}:</strong>{" "}
              {t("mapeamentoDeCampos.credentials.catalogConfig.variation.description")}
            </li>
          </ul>
          <Alert className="mt-3 rounded-xl">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>{t("mapeamentoDeCampos.credentials.catalogConfig.limit")}</AlertDescription>
          </Alert>
        </section>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
