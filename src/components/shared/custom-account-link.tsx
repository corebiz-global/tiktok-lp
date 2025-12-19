import { useTranslation } from "react-i18next";
import { CustomCode } from "./custom-code";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";

export function CustomAccountLink({ path, label }: { path: string; label?: string }) {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const account = get() || "{{account}}";

  const description = label ?? t("configCredenciasVtex.access.description");

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text"></h4>
      <p className="text-sm text-muted-foreground">{description}</p>
      <CustomCode code={`https://${account}.myvtex.com/${path}`} />
      {account === "{{account}}" && (
        <p className="text-xs mt-1 ml-2 text-muted-foreground ">{t("mapeamentoDeCampos.brandMapping.access.helper")}</p>
      )}
    </div>
  );
}
