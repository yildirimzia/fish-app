"use client";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [activeItem, setActiveItem] = useState<number>(0);

  useEffect(() => {
    const storedActiveItem = localStorage.getItem("activeItem");
    if (storedActiveItem) {
      setActiveItem(Number(storedActiveItem));
    }
  }, []);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    localStorage.setItem("activeItem", index.toString());
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header activeItem={activeItem} onClick={handleItemClick} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
