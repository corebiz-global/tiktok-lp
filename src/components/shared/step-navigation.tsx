"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";

type StepNavigationProps = {
  backHref?: string;
  continueHref: string;
  continueDisabled?: boolean;
  className?: string;
};

export function StepNavigation({ backHref, continueHref, continueDisabled = false, className }: StepNavigationProps) {
  const { t } = useTranslation();

  return (
    <div className={twMerge("fixed inset-x-0 bottom-0 z-50 border-t bg-background", className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-end md:px-6">
        {backHref && (
          <Button variant="outline" className="rounded-2xl" asChild>
            <Link href={backHref}>{t("commons.back")}</Link>
          </Button>
        )}

        <Button className="rounded-2xl" disabled={continueDisabled} asChild>
          <Link href={continueHref}>{t("commons.continue")}</Link>
        </Button>
      </div>
    </div>
  );
}
