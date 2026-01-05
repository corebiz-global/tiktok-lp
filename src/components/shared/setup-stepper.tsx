"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useCurrentStep } from "@/hooks/use-current-step";
import { useTranslation } from "react-i18next";

export function SetupStepper() {
  const { t } = useTranslation();

  const TIKTOK_SETUP_STEPS = [
    { label: t("tiktokSetup.title"), path: "/tiktok-setup" },
    { label: t("docs.pages.createBrand"), path: "/criar-marca-tiktok" },
    { label: t("configurarConectorVtex.title"), path: "/configurar-conector-vtex" },
    { label: t("configCredenciasVtex.title"), path: "/configurar-credenciais-vtex" },
    { label: t("onboardingCompleted.title"), path: "/onboarding-completed" },
  ];

  const router = useRouter();
  const currentStep = useCurrentStep(TIKTOK_SETUP_STEPS);

  const visibleSteps = TIKTOK_SETUP_STEPS.slice(0, -1);

  return (
    <TooltipProvider>
      <div className="hidden sm:flex items-center justify-center ">
        {visibleSteps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isClickable = index < currentStep;

          return (
            <div key={step.path} className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => isClickable && router.push(step.path)}
                    disabled={!isClickable}
                    className={cn(
                      "h-8 w-8 rounded-full border flex items-center justify-center transition-all",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isCompleted && "bg-primary border-primary text-primary-foreground",
                      !isCompleted && isActive && "border-primary text-primary",
                      !isCompleted && !isActive && "border-border text-muted-foreground",
                      isClickable && "cursor-pointer hover:border-primary",
                      !isClickable && "cursor-default",
                    )}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{step.label}</p>
                </TooltipContent>
              </Tooltip>

              {index < visibleSteps.length - 1 && (
                <div
                  className={cn("h-0.5 w-22 transition-colors mx-2", index < currentStep ? "bg-primary" : "bg-border")}
                />
              )}
            </div>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
