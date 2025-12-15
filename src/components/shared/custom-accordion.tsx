"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type CustomAccordionProps = React.ComponentProps<typeof Accordion>;

export function CustomAccordion(props: CustomAccordionProps) {
  return <Accordion {...props} />;
}

type CustomAccordionItemProps = React.ComponentProps<typeof AccordionItem>;

export function CustomAccordionItem({ className, ...props }: CustomAccordionItemProps) {
  return (
    <AccordionItem {...props} className={twMerge("rounded-2xl border overflow-hidden bg-background", className)} />
  );
}

type CustomAccordionTriggerProps = React.ComponentProps<typeof AccordionTrigger>;

export function CustomAccordionTrigger({ className, children, ...props }: CustomAccordionTriggerProps) {
  return (
    <AccordionTrigger
      {...props}
      className={twMerge(
        `
        flex w-full items-center justify-between
        px-6 py-4 text-left text-base font-medium
        hover:no-underline cursor-pointer
        [&[data-state=open]>svg]:rotate-180
        `,
        className,
      )}
    >
      <span>{children}</span>

      <ChevronDown
        className="
          h-5 w-5 shrink-0
          transition-transform duration-200
          text-muted-foreground
        "
      />
    </AccordionTrigger>
  );
}

type CustomAccordionContentProps = React.ComponentProps<typeof AccordionContent>;

export function CustomAccordionContent({ className, ...props }: CustomAccordionContentProps) {
  return <AccordionContent {...props} className={twMerge("px-6 pb-6 pt-4 text-sm text-muted-foreground", className)} />;
}
