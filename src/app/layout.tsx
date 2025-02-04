"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/splashScreen";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: 'SOOF Factoring B.V',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 1500); // Matches SplashScreen timeout
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
            <Toaster position="bottom-right" reverseOrder={false} />
          </>
        )}
      </body>
    </html>
  );
}
