import { CustomCode } from "@/components/shared/custom-code";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useTranslation } from "react-i18next";

export function Link() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text"></h4>
      <p className="text-sm text-muted-foreground">{t("configCredenciasVtex.access.description")}</p>
      <CustomCode code={`https://${account}.myvtex.com/admin/corebiz/tiktok-connector`} />
      {account === "{{account}}" && (
        <p className="text-xs mt-1 ml-2 text-muted-foreground">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
      )}
    </div>
  );
}
