"use client";
import { CustomDropdown } from "@/components/shared/custom-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown, GlobeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const currentLang = i18n.language === "pt" ? "PT" : "EN";

  const options = [
    {
      value: "pt",
      label: `${t("language-pt")}`,
      onClick: () => i18n.changeLanguage("pt"),
    },
    {
      value: "en",
      label: `${t("language-en")}`,
      onClick: () => i18n.changeLanguage("en"),
    },
  ];

  return (
    <CustomDropdown options={options}>
      <Button
        variant="ghost"
        size="sm"
        className={twMerge(
          "text-neutral-100 hover:bg-white/10 focus-visible:ring-white/50 transition-colors duration-300 cursor-pointer flex gap-3 li",
        )}
      >
        <GlobeIcon className="h-5 w-5 text-neutral-100" />
        <span className="text-neutral-100 text-sm font-semibold">{currentLang}</span>
        <ChevronDown className="h-4 w-4 text-neutral-100" />
      </Button>
    </CustomDropdown>
  );
}
