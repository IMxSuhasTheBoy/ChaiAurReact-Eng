import { createContext, useContext } from "react";

// 1 - created the context with the shape of the theme data and the context.
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2 - created the provider component to wrap the entire app and pass the context value to all child components.
export const ThemeProvider = ThemeContext.Provider;

// 3 - created a custom hook to access the context value.
export default function useTheme() {
  return useContext(ThemeContext);
}
