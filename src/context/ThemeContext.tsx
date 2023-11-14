import { createContext, ReactNode, useMemo, useState } from 'react';

export const ThemeContext = createContext({} as ThemeContextProps);

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prev: string) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export  default ThemeContextProvider;