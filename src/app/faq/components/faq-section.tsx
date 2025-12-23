"use client";

import { ReactNode, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { CustomAccordion } from "@/components/shared/custom-accordion";
import Link from "next/link";

type FaqSectionProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};

export function FaqSection({ id, title, icon: Icon, children }: FaqSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");

    if (currentHash === id && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [id]);

  return (
    <section ref={sectionRef} id={id} className="space-y-4 scroll-mt-28">
      <Link href={`#${id}`} className="flex items-center gap-2 mx-2">
        <Icon size={22} className="text-muted-foreground" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </Link>

      <CustomAccordion type="multiple" className="space-y-3">
        {children}
      </CustomAccordion>
    </section>
  );
}
