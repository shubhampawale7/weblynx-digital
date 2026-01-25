// client/src/context/ThemeContext.jsx
import React, { createContext, useContext, useLayoutEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // We lock the theme to 'dark' globally
  const theme = "dark";

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    // Hard-reset: Remove any light mode traces and force dark
    root.classList.remove("light");
    root.classList.add("dark");

    // Optional: Clear old storage so it doesn't conflict
    localStorage.removeItem("weblynx_env_theme");
    localStorage.removeItem("theme");
  }, []);

  // toggleTheme becomes a no-op to prevent crashes in components that still call it
  const toggleTheme = () => {
    console.warn(
      "Weblynx_OS: Theme is locked to DARK_MODE by system directive.",
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
};
