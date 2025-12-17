"use client";

import { useCallback } from "react";

export function useLocalStorage<T = string>(key: string) {
  const get = useCallback((): T | null => {
    if (typeof window === "undefined") return null;

    try {
      const value = window.localStorage.getItem(key);
      if (value === null) return null;

      return JSON.parse(value) as T;
    } catch {
      return window.localStorage.getItem(key) as T;
    }
  }, [key]);

  const set = useCallback(
    (value: T) => {
      if (typeof window === "undefined") return;

      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        window.localStorage.setItem(key, String(value));
      }
    },
    [key],
  );

  const remove = useCallback(() => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  }, [key]);

  return {
    get,
    set,
    remove,
  };
}
