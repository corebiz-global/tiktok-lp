/* eslint-disable no-undef */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/** Define os temas disponíveis na aplicação. */
type Theme = "light" | "dark";

/** Estrutura do contexto de tema. */
interface ThemeContextProps {
  /** Tema atual da aplicação (`light` ou `dark`). */
  theme: Theme;
  /** Função para alternar entre os temas. */
  toggleTheme: () => void;
}

/** Contexto que armazena o tema atual e a função de alternância. */
const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  // eslint-disable-next-line prettier/prettier
  toggleTheme: () => { },
});

/**
 * Provedor responsável por gerenciar o tema da aplicação.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Lê localStorage apenas no client
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      return;
    }

    // fallback para preferência do sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Aplica o tema
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /** Alterna o tema entre `light` e `dark`. */
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
