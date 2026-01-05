"use client";

import { usePathname } from "next/navigation";

export function useCurrentStep(steps: { path: string }[]) {
  const pathname = usePathname();

  const index = steps.findIndex((step) => step.path === pathname);

  return index === -1 ? 0 : index;
}
