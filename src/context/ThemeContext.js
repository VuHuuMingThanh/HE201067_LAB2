import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const THEME_KEY = "movie_theme";

export function ThemeProvider({ children }) {
  // Đọc theme đã lưu (nếu có) để không bị nháy khi refresh
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
