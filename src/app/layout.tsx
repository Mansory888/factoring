"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/splashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 5300); // Matches SplashScreen timeout
    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <body>
      {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
