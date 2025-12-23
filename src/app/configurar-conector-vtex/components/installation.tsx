import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { CustomCode } from "@/components/shared/custom-code";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { InfoIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import installImage from "../../../../public/assets/images/install-app-vtex.png";
import { CustomImage } from "@/components/shared/custom-image";

export function Installation() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);
  const account = get() || "{{account}}";

  return (
    <CustomAccordionItem value="instalacao" id="instalacao">
      <CustomAccordionTrigger>{t("installation.trigger")}</CustomAccordionTrigger>
      <CustomAccordionContent className="space-y-5">
        <ol className="list-decimal space-y-2 pl-5">
          <li>{t("installation.steps.apps")}</li>
          <li>
            {t("installation.steps.search")}
            <CustomCode code={`https://${account}.myvtex.com/admin/app/apps/corebiz.tiktok-connector/install`} />
          </li>
          <li>{t("installation.steps.install")}</li>
        </ol>
        <Alert className="rounded-xl">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>{t("installation.alert.title")}</AlertTitle>
          <AlertDescription>{t("installation.alert.description")}</AlertDescription>
        </Alert>
        <CustomImage src={installImage} alt="Instalação VTEX" />
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
