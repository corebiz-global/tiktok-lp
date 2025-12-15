import {
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";

export function Afiliado() {
  return (
    <CustomAccordionItem value="afiliado">
      <CustomAccordionTrigger>2. Configurar Afiliado (Marketplace)</CustomAccordionTrigger>

      <CustomAccordionContent>
        {" "}
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            No VTEX Admin, vá em <strong>Configurações da Loja</strong> → <strong>Pedidos</strong> →{" "}
            <strong>Configurações</strong>.
          </li>
          <li>
            Acesse a aba <strong>Afiliados</strong>.
          </li>
          <li>
            Clique em <strong>Novo Afiliado</strong>.
          </li>
          <li>
            Preencha os campos:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Nome:</strong> TikTok Shop
              </li>
              <li>
                <strong>ID:</strong> TTS
              </li>
              <li>
                <strong>Política comercial:</strong> número da política
              </li>
              <li>
                <strong>E-mail:</strong> seu e-mail
              </li>
              <li>
                <strong>Endpoint de busca:</strong>
                <code className="mt-1 block rounded bg-muted px-2 py-1">
                  https://&#123;&#123;account&#125;&#125;.myvtex.com/corebiz.tiktok-connector/vtex
                </code>
              </li>
              <li>
                <strong>Search Endpoint:</strong> l.xx
              </li>
              <li>
                <strong>Usar método de pagamento:</strong> desmarcado
              </li>
            </ul>
          </li>
          <li>
            Clique em <strong>Salvar</strong>.
          </li>
        </ol>
      </CustomAccordionContent>
    </CustomAccordionItem>
  );
}
