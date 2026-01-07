"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { TIKTOK_SHOP_ID_STORAGE_KEY } from "@/constants";

export function ShopIdInput() {
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

  return (
    <div className="flex items-stretch max-w-full">
      <Input
        value={shopId}
        readOnly
        className=" w-full max-w-80 min-w-0 rounded-r-none rounded-l-lg bg-secondary/10 font-mono text-sm border-r-0 border-neutral-300 truncate"
      />

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className=" shrink-0 rounded-l-none rounded-r-lg border border-neutral-300 dark:border-neutral-300"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
      </Button>
    </div>
  );
}
