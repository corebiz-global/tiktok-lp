"use client";

import { AlertTriangleIcon } from "lucide-react";

import { HeaderSection } from "@/components/shared/header-section";
import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/shared/custom-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Integration() {
  return (
    <section className="space-y-6 pb-28">
      <HeaderSection
        title="Integração do Catálogo"
        description="Nesta etapa, você irá integrar os produtos da sua loja VTEX com o TikTok Shop, acompanhar o status das integrações e entender como funciona o gerenciamento pós-integração."
      />

      <CustomAccordion type="single" collapsible defaultValue="start-integration" className="space-y-4">
        {/* 1. Iniciar integração */}
        <CustomAccordionItem value="start-integration" id="start-integration">
          <CustomAccordionTrigger>1. Iniciar a Integração do Catálogo</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              No painel do Conector TikTok Shop no VTEX Admin, acesse a seção
              <strong> Integração do Catálogo</strong>.
            </p>

            <ol className="list-decimal space-y-2 pl-5 mt-4">
              <li>Acesse o painel do conector no VTEX Admin.</li>
              <li>
                Clique em <strong>Integração do Catálogo</strong>.
              </li>
              <li>Escolha uma das opções de integração disponíveis.</li>
              <li>
                Clique em <strong>Iniciar Integração</strong>.
              </li>
            </ol>

            <div className="mt-4 space-y-3">
              <p>
                <strong>Opções disponíveis:</strong>
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Integrar todo o catálogo:</strong> recomendado para lojas com até 1000 produtos.
                </li>
                <li>
                  <strong>Integrar por coleção:</strong> recomendado para lojas com mais de 1000 produtos. Informe o ID
                  da coleção que deseja integrar.
                </li>
              </ul>
            </div>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 2. Limites do TikTok */}
        <CustomAccordionItem value="limits" id="limits">
          <CustomAccordionTrigger>2. Limite de Produtos do TikTok Shop</CustomAccordionTrigger>
          <CustomAccordionContent>
            <Alert className="rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Limite diário de integração</AlertTitle>
              <AlertDescription>
                O TikTok Shop permite o envio de no máximo <strong>1000 produtos por dia</strong>.
              </AlertDescription>
            </Alert>

            <p className="mt-4">Caso sua loja possua mais de 1000 produtos:</p>

            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>A integração deverá ser continuada no dia seguinte.</li>
              <li>
                Produtos que não forem processados aparecerão no dashboard como
                <strong> não processados</strong>.
              </li>
            </ul>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 3. Configuração de catálogo */}
        <CustomAccordionItem value="catalog-config" id="catalog-config">
          <CustomAccordionTrigger>3. Configuração de Catálogo (Variações)</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              Durante a integração, é necessário configurar corretamente os
              <strong> atributos de variação</strong> dos produtos.
            </p>

            <p className="mt-3">Insira os nomes dos atributos separados por vírgula. Exemplo:</p>

            <pre className="mt-3 rounded-xl bg-muted p-4 text-xs">Tamanho, Cor, Estampa</pre>

            <Alert className="mt-4 rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Limite de variações</AlertTitle>
              <AlertDescription>
                O TikTok Shop aceita no máximo <strong>3 variações por produto</strong>. Produtos que excederem esse
                limite podem falhar na integração.
              </AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 4. Atributos obrigatórios */}
        <CustomAccordionItem value="required-attributes" id="required-attributes">
          <CustomAccordionTrigger>4. Atributos Obrigatórios (Composição / Ingredientes)</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>Algumas categorias possuem campos obrigatórios exigidos pelo TikTok Shop.</p>

            <p className="mt-3">
              <strong>Exemplo: Cosméticos</strong>
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                O campo <strong>Composição / Ingredientes</strong> é obrigatório.
              </li>
              <li>Esse campo deve estar corretamente cadastrado na VTEX.</li>
              <li>
                O mapeamento deve ser feito na etapa de <strong>Mapeamento de Campos</strong>.
              </li>
            </ul>

            <Alert className="mt-4 rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>
                Caso o atributo obrigatório não esteja preenchido ou mapeado, o produto será rejeitado pelo TikTok e
                aparecerá com erro no dashboard.
              </AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 5. Moda */}
        <CustomAccordionItem value="fashion" id="fashion">
          <CustomAccordionTrigger>5. Moda – Tabela de Medidas</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              Para produtos da categoria <strong>Moda</strong>, o TikTok exige o envio da{" "}
              <strong>tabela de medidas</strong>.
            </p>

            <p className="mt-3">
              O upload da tabela pode ser realizado na aba <strong>Mapeamento de Campos</strong>
              do conector.
            </p>

            <p className="mt-2 text-sm">Caminho no VTEX Admin:</p>

            <pre className="mt-2 rounded-xl bg-muted p-4 text-xs">
              VTEX Admin &gt; Corebiz &gt; TikTok Connector &gt; Mapeamento de Campos
            </pre>

            <Alert className="mt-4 rounded-xl">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Obrigatório</AlertTitle>
              <AlertDescription>
                A ausência da tabela de medidas pode causar falha ou bloqueio da integração do produto no TikTok Shop.
              </AlertDescription>
            </Alert>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 6. Dashboard */}
        <CustomAccordionItem value="dashboard" id="dashboard">
          <CustomAccordionTrigger>6. Dashboard de Integração</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>
              Após iniciar a integração, você poderá acompanhar todo o processo através do{" "}
              <strong>Dashboard do Conector</strong>.
            </p>

            <p className="mt-3">No dashboard, é possível visualizar:</p>

            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Total de produtos</li>
              <li>Produtos já existentes no TikTok</li>
              <li>Produtos integrados com sucesso</li>
              <li>Produtos com erro</li>
              <li>Produtos não processados</li>
              <li>Motivo detalhado dos erros</li>
            </ul>
          </CustomAccordionContent>
        </CustomAccordionItem>

        {/* 7. Pós-integração */}
        <CustomAccordionItem value="post-integration" id="post-integration">
          <CustomAccordionTrigger>7. Gerenciamento Pós-Integração</CustomAccordionTrigger>
          <CustomAccordionContent>
            <p>Após a integração do catálogo, alguns fluxos passam a ser automáticos.</p>

            <h4 className="mt-4 font-medium">Sincronização de estoque e preço</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Atualizações de estoque e preço bruto são enviadas automaticamente.</li>
              <li>Certifique-se de que a política comercial configurada no conector seja a mesma usada na VTEX.</li>
            </ul>

            <h4 className="mt-4 font-medium">Etiquetas de envio</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Geradas automaticamente pelo TikTok após o pedido.</li>
              <li>Disponíveis no pedido dentro da VTEX.</li>
              <li>O link da etiqueta possui validade aproximada de 2 dias.</li>
            </ul>

            <h4 className="mt-4 font-medium">Amostras grátis (Creators)</h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>O envio do código de rastreio é manual.</li>
              <li>Pedidos entram na VTEX com valor de R$ 0,01.</li>
            </ul>

            <h4 className="mt-4 font-medium">Troca e devolução</h4>
            <p className="mt-2">
              As políticas de troca e devolução devem ser consultadas diretamente na documentação oficial do TikTok
              Shop.
            </p>
          </CustomAccordionContent>
        </CustomAccordionItem>
      </CustomAccordion>
    </section>
  );
}
