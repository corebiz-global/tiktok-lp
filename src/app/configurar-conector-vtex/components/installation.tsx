import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export function Installation() {
  return (
    <CustomAccordionItem value="instalacao">
      <CustomAccordionTrigger>3. Instalar o Conector Corebiz</CustomAccordionTrigger>

      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            No menu lateral do VTEX Admin, vá em <strong>Aplicativos</strong>.
          </li>
          <li>
            Procure por <strong>Corebiz - TikTok Shop Connector</strong>.
          </li>
          <li>Instale o aplicativo.</li>
        </ol>

        <Alert className="mt-4 rounded-xl">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
            O conector só funcionará se sua loja estiver autorizada pela Corebiz. Será necessário contato com o time
            comercial. Este aplicativo não é gratuito.
          </AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
