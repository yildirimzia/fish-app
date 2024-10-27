import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

interface ThemeSwitcherProps {
  onThemeChange: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  console.log(theme, "theme");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    console.log(newTheme, "newTheme");
    setTheme(newTheme);
    onThemeChange();
  };

  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          size={25}
          onClick={() => handleThemeChange("dark")}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          fill="white"
          size={25}
          onClick={() => handleThemeChange("light")}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
