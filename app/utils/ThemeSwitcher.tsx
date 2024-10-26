import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

interface ThemeSwitcherProps {
  onThemeChange: () => void; // Tema değişikliği için bir prop ekledik
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    onThemeChange(); // Tema değiştiğinde prop'u çağırıyoruz
  };

  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          size={25}
          onClick={() => handleThemeChange("dark")} // Tema değişikliğini buradan yönetiyoruz
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          fill="white"
          size={25}
          onClick={() => handleThemeChange("light")} // Tema değişikliğini buradan yönetiyoruz
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
