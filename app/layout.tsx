"use client";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import React, { useState } from "react";
import Header from "./components/Header";

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
  const [activeItem] = useState(0);
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header activeItem={activeItem} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
