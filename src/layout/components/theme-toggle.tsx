import { MoonIcon, SunIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/context/theme-context-provider";

/**
 * Botão que alterna entre o tema claro e escuro da aplicação.
 *
 * Exibe o ícone do sol no modo claro e o ícone da lua no modo escuro.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={twMerge(
        "text-white focus-visible:ring-white/50 transition-colors duration-300 cursor-pointer hover:bg-white/10",
      )}
    >
      {theme === "light" ? <SunIcon className="h-5 w-5 text-white" /> : <MoonIcon className="h-5 w-5 text-white" />}
    </Button>
  );
}
