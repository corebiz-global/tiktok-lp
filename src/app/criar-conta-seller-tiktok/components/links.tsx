"use client";

import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";

type Link = {
  key: string;
  href: string;
};

const linksTikTokShop: Link[] = [
  {
    key: "sellerRegistration",
    href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3995530205677329&from=feature_guide",
  },
  {
    key: "accountSettings",
    href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=6797682433951504&from=feature_guide",
  },
  {
    key: "accountRights",
    href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=6799958289008401&from=feature_guide",
  },
  {
    key: "contentPolicy",
    href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=1413208980588305&from=policy",
  },
  {
    key: "adsPolicy",
    href: "https://ads.tiktok.com/help/article/tiktok-advertising-policies?lang=pt",
  },
  {
    key: "policyCenter",
    href: "https://seller-br.tiktok.com/university/home?identity=1&role=seller&knowledge_id=1721569656112912&from=feature_guide&content_id=2487614578165520&menu=policy",
  },
  {
    key: "partnerDocs",
    href: "https://partner.tiktokshop.com/docv2/page/6789f6f818828103147a8b05",
  },
];

export function Links() {
  const { t } = useTranslation();

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{t("criarContaSeller.links.title")}</CardTitle>
        <CardDescription>{t("criarContaSeller.links.description")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {linksTikTokShop.map((link) => (
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors hover:bg-muted"
          >
            <span className="text-foreground group-hover:underline">
              {t(`criarContaSeller.links.items.${link.key}`)}
            </span>

            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
