'use client';

import {createContext, useContext, useState, useEffect} from "react";

interface LightModeContextType {
  theme: string;
  toggleDarkMode: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const LightModeContext = createContext<LightModeContextType | undefined>(undefined);

export const LightModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  // 1) Start with a default (no localStorage call here)
  const [theme, setTheme] = useState<"light"|"dark">("light");
  const [hydrated, setHydrated] = useState(false);

  // 2) On first client‑render, read from localStorage
  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as "light"|"dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
    setHydrated(true);
  }, []);

  // 3) Whenever theme changes (and we’re hydrated), write back
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, hydrated]);

  const toggleDarkMode = () => {
    setTheme(curr => (curr === "light" ? "dark" : "light"));
  };

  return (
    <LightModeContext.Provider value={{ theme, toggleDarkMode, setTheme }}>
      {children}
    </LightModeContext.Provider>
  );
};

export const useLightModeContext = () => {
  const ctx = useContext(LightModeContext);
  if (!ctx) throw new Error("useLightModeContext must be inside its Provider");
  return ctx;
};
