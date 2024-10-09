"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {pathname !== "/" && <Header />}
      {children}
      {pathname !== "/" && <Footer />}
    </div>
  );
}
