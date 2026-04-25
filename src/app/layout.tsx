import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ClientLayout from "@/components/ClientLayout";
import CookieConsent from "@/components/CookieConsent";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Presets | Premium Video Editing Presets",
  description: "Professional color grading presets for DaVinci Resolve, Premiere Pro, and CapCut. Transform your video content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
        <style>{`
          :root {
            --font-display: "Clash Display", sans-serif;
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col bg-bg-primary text-white antialiased">
        <CartProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}