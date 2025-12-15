"use client";

import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SetupStepCardProps = {
  title: string;
  steps: string[];
  description?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
};

export function SetupStepCard({ title, steps, image, imageAlt, description }: SetupStepCardProps) {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardHeader className="gap-0">
        <CardTitle className="text-base">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        <ol className="list-decimal space-y-1 px-4">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </CardContent>
      {image ? (
        <div className="mx-6 overflow-hidden w-fit rounded-xl border">
          <Image src={image} alt={imageAlt ?? title} className=" object-cover" priority={false} />
        </div>
      ) : null}
    </Card>
  );
}
