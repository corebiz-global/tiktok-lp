import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";

export function AppKeys() {
  return (
    <CustomAccordionItem value="app-key">
      <CustomAccordionTrigger>1. Gerar App Key e App Token</CustomAccordionTrigger>
      <CustomAccordionContent>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Acesse o <strong>VTEX Admin</strong>.
          </li>
          <li>Clique no avatar do seu perfil (canto superior direito).</li>
          <li>
            Vá em <strong>Configurações da conta</strong> → <strong>Chaves do aplicativo</strong>.
          </li>
          <li>
            Clique em <strong>Gerenciar minhas chaves</strong>.
          </li>
          <li>
            Clique em <strong>+ Gerar chave</strong>.
          </li>
          <li>
            Preencha o <strong>Rótulo</strong> (ex: <em>Integração TikTok Shop</em>).
          </li>
          <li>
            Em <strong>Perfil de acesso</strong>, selecione <strong>Owner (Admin Super)</strong>.
          </li>
          <li>
            Clique em <strong>Gerar</strong>.
          </li>
        </ol>
        <Alert className="mt-4 rounded-xl">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>Importante</AlertTitle>
          <AlertDescription>
            O App Token será exibido apenas uma vez. Copie-o imediatamente e armazene em um local seguro. Caso o token
            seja perdido, será necessário gerar uma nova chave.
          </AlertDescription>
        </Alert>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
