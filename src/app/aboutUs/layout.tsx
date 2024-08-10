"use client";

// Imprting components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
