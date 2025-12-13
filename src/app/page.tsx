"use client";
import type { ReactNode } from "react";

import { useState } from "react";
import PreRequisites from "../components/steps/prerequisites";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const getStep = () => {
    const steps: Record<number, ReactNode> = {
      1: <PreRequisites />,
    };
    return steps[currentStep];
  };

  return <>{getStep()}</>;
}
