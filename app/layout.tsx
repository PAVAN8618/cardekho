import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "@/Components";

export const metadata: Metadata = {
  title: "Car Dekho",
  description: "Find best car for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
