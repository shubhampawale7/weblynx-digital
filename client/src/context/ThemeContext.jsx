// client/src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? storedTheme : "dark"; // Default to dark theme
    }
    return "dark"; // Default for SSR or initial load without localStorage
  });

  useEffect(() => {
    const root = window.document.documentElement; // This is the <html> tag
    root.classList.remove("light", "dark"); // Remove existing theme classes
    root.classList.add(theme); // Add current theme class
    localStorage.setItem("theme", theme); // Store theme preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
