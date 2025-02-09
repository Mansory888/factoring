"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/splashScreen";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return showSplash ? <SplashScreen /> : <>{children}</>;
}