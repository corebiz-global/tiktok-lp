"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Docs() {
  const { t } = useTranslation();

  const pages = [
    { title: t("docs.pages.prerequisites"), href: "/", tag: "" },
    { title: t("docs.pages.createSeller"), href: "/criar-conta-seller-tiktok", tag: "tiktok" },
    { title: t("docs.pages.tiktokSetup"), href: "/tiktok-setup", tag: "tiktok" },
    { title: t("docs.pages.createBrand"), href: "/criar-marca-tiktok", tag: "tiktok" },
    { title: t("docs.pages.configureConnector"), href: "/configurar-conector-vtex", tag: "vtex" },
    { title: t("docs.pages.configureCredentials"), href: "/configurar-credenciais-vtex", tag: "vtex" },
    { title: t("docs.pages.fieldMapping"), href: "/mapeamento-de-campos", tag: "vtex" },
    { title: t("docs.pages.catalogIntegration"), href: "/integracao-do-catalogo", tag: "vtex" },
    { title: t("docs.pages.faq"), href: "/faq" },
  ];

  return (
    <div className="space-y-8 pb-28">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("docs.title")}</h1>

        <p className="text-muted-foreground max-w-2xl">{t("docs.description")}</p>
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
