import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.body.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove("dark");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {isDark ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
