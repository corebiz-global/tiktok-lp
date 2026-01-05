"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { SetupStepper } from "./setup-stepper";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type StepNavigationProps = {
  backHref?: string;
  continueHref?: string;
  continueDisabled?: boolean;
  className?: string;
};

export function StepNavigation({ backHref, continueHref, continueDisabled = false, className }: StepNavigationProps) {
  const { t } = useTranslation();

  return (
    <div className={twMerge("fixed inset-x-0 bottom-0 z-50 border-t bg-background", className)}>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 justify-end sm:justify-between md:px-6">
        <SetupStepper />
        <div className="flex gap-2">
          {backHref && (
            <Button
              asChild
              className="
                rounded-2xl sm:rounded-full
                sm:h-10 sm:w-10 sm:p-0

                /* mobile = outline */
                bg-transparent
                border border-border
                text-foreground
                hover:bg-accent

                /* sm+ = default */
                sm:bg-primary
                sm:text-primary-foreground
                sm:border-transparent
                sm:hover:bg-primary/90
              "
            >
              <Link href={backHref} className="flex items-center justify-center gap-2">
                <span className="sm:hidden">{t("commons.back")}</span>
                <ChevronLeftIcon className="hidden sm:inline h-5 w-5" />
              </Link>
            </Button>
          )}
          {continueHref && (
            <Button asChild disabled={continueDisabled} className="rounded-2xl sm:rounded-full sm:h-10 sm:w-10 sm:p-0">
              <Link href={continueHref} className="flex items-center justify-center gap-2">
                <span className="sm:hidden">{t("commons.continue")}</span>
                <ChevronRightIcon className="hidden sm:inline h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
