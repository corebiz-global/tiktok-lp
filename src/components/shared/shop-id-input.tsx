"use client";

import { useEffect, useState } from "react";
import { Check, Copy, InfoIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { TIKTOK_SHOP_ID_STORAGE_KEY } from "@/constants";
import { Alert, AlertDescription } from "../ui/alert";
import { useTranslation } from "react-i18next";

export function ShopIdInput() {
  const { t } = useTranslation();
  const { get } = useLocalStorage<string>(TIKTOK_SHOP_ID_STORAGE_KEY);

  const [shopId, setShopId] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedShopId = get();
    if (storedShopId) setShopId(storedShopId);
  }, [get]);

  async function handleCopy() {
    if (!shopId) return;
    if (typeof navigator === "undefined") return;

    await navigator.clipboard.writeText(shopId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  if (!shopId) return null;

  return shopId ? (
    <div className="inline-flex items-stretch">
      <Input
        value={shopId}
        readOnly
        className="
          w-[220px]
          rounded-r-none
          rounded-l-lg
          bg-secondary/10
          font-mono
          text-sm
          border-r-0
          border-neutral-300
        "
      />

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className="
          rounded-l-none
          rounded-r-lg
          border
             border-neutral-300
        "
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
      </Button>
    </div>
  ) : (
    <Alert className="mt-3 rounded-xl">
      <InfoIcon className="h-4 w-4" />
      <AlertDescription>{t(`configCredenciasVtex.tiktokConfig.helper`)}</AlertDescription>
    </Alert>
  );
}
