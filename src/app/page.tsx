/* eslint-disable no-undef */
"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Info } from "lucide-react";

import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Label } from "@/components/ui/label";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HeaderSection } from "@/components/shared/header-section";
import { VTEX_ACCOUNT_STORAGE_KEY } from "@/constants";

export default function Home() {
  const { t } = useTranslation();
  const { set, get } = useLocalStorage<string>(VTEX_ACCOUNT_STORAGE_KEY);

  const [accountValue, setAccountValue] = useState("");

  function handleVtexAccountBlur(e: React.FocusEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    if (!value) {
      setAccountValue("");
      set("");
      return;
    }

    setAccountValue(value);
    set(value);
  }

  useEffect(() => {
    const account = get();
    if (account) setAccountValue(account);
  }, []);

  const isTiktokDisabled = !accountValue;

  return (
    <div>
      <HeaderSection title={t("hero.title")} description={t("hero.description")} />
      <section id="guia" className="grid gap-6">
        <div className="space-y-6 lg:col-span-2">
          <Card id="pre-requisitos" className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">{t("preRequisites.content.title")}</CardTitle>
              <CardDescription>{t("preRequisites.content.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <div className="flex-1 space-y-2">
                  <p className="text-sm font-medium">{t("preRequisites.items.vtexAccount.title")}</p>
                  <p className="text-sm text-muted-foreground">{t("preRequisites.items.vtexAccount.description")}</p>
                  <Label htmlFor="vtexAccount">{t("preRequisites.items.vtexAccount.label")}</Label>
                  <Input
                    id="vtexAccount"
                    placeholder={t("preRequisites.items.vtexAccount.placeholder")}
                    onBlur={handleVtexAccountBlur}
                    className="rounded-xl"
                    defaultValue={accountValue}
                  />
                </div>
              </div>
              <div
                className={twMerge(
                  "flex items-start gap-3 rounded-2xl border p-4 transition-opacity",
                  isTiktokDisabled && "opacity-50 pointer-events-none",
                )}
              >
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 ${isTiktokDisabled ? "text-muted-foreground" : "text-primary"}`}
                />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{t("preRequisites.items.tiktokSeller.title")}</p>
                  <p className="text-sm text-muted-foreground">{t("preRequisites.items.tiktokSeller.description")}</p>
                  <div className="pt-2">
                    <Button asChild variant="secondary" className="rounded-2xl" disabled={isTiktokDisabled}>
                      <Link href="/criar-conta-seller-tiktok">{t("preRequisites.items.tiktokSeller.cta")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Alert className="rounded-2xl">
            <Info className="h-4 w-4" />
            <AlertTitle>{t("preRequisites.alert.title")}</AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground">
              {t("preRequisites.alert.description")}
            </AlertDescription>
          </Alert>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{t("preRequisites.footer.text")}</p>
            <Button className="rounded-2xl" disabled={!accountValue}>
              <Link href="/tiktok-setup">{t("commons.continue")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
