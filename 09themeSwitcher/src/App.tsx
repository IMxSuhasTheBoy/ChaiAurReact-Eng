import "./App.css";
import { useEffect, useState } from "react";
import { Card, ThemeBtn } from "./components/index";
import { ThemeProvider } from "./contexts/theme";

function App() {
  // 5 - State for managing theme mode.
  const [themeMode, setThemeMode] = useState("light");

  // 6 - Functions to change theme mode.
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  // 7 - To update the HTML class based on the theme mode.
  useEffect(() => {
    document.querySelector("html")?.setAttribute("class", themeMode);
  }, [themeMode]);

  return (
    // 4 - Wrapped the entire app with the provider component and passed the context value to all child components.
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-slate-600">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
