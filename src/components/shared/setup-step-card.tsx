"use client";

import { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { twMerge } from "tailwind-merge";
import { CustomImage } from "./custom-image";

type SetupStepCardProps = {
  title?: string;
  steps: string[];
  description?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  className?: string;
};

export function SetupStepCard({ title, steps, image, imageAlt, description, className }: SetupStepCardProps) {
  return (
    <Card className={twMerge("rounded-2xl overflow-hidden", className)}>
      <CardHeader className="gap-0">
        {title && <CardTitle className="text-base">{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        <ol className="list-decimal space-y-1 px-4">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </CardContent>
      {image ? <CustomImage src={image} alt={imageAlt ?? title ?? ""} /> : null}
    </Card>
  );
}
