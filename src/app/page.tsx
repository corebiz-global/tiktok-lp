"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import PreRequisites from "../components/steps/prerequisites";
import { TikTokShopSetup } from "@/components/steps/tiktok-shop-setup";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  // Função que faz o scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStep = () => {
    const steps: Record<number, ReactNode> = {
      1: (
        <PreRequisites
          nextStep={() => {
            setCurrentStep(2);
            scrollToTop();
          }}
        />
      ),
      2: (
        <TikTokShopSetup
          nextStep={() => {
            setCurrentStep(3);
            scrollToTop();
          }}
        />
      ),
    };
    return steps[currentStep];
  };

  return <>{getStep()}</>;
}
