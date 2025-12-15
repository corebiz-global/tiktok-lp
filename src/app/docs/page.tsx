import Link from "next/link";

export default function Docs() {
  const pages = [
    { title: "Pré Requisitos", href: "/", tag: "" },
    { title: "Criar conta seller", href: "/criar-conta-seller-tiktok", tag: "tiktok" },
    { title: "Setup TikTok", href: "/tiktok-setup", tag: "tiktok" },
    { title: "Criar Marca", href: "/criar-marca", tag: "tiktok" },
    { title: "Configurar Conector na Vtex", href: "/configurar-conector-vtex", tag: "vtex" },
  ];

  return (
    <div className="space-y-8 pb-28">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Documentação</h1>
        <p className="text-muted-foreground max-w-2xl">
          Guias passo a passo para instalação, configuração e uso do conector.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="
                group block h-full rounded-2xl border p-5
                transition-colors
                hover:border-primary/40 hover:bg-accent
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-primary
              "
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium leading-snug group-hover:underline">{page.title}</h2>

                {page.tag && (
                  <span
                    className="
                    shrink-0 rounded-full border bg-muted px-2.5 py-0.5
                    text-[10px] font-semibold uppercase tracking-wide
                    text-muted-foreground
                  "
                  >
                    {page.tag}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
