import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How much time is benefits admin really costing your team",
  description: "How much time is benefits admin really costing your team",
  icons: {
    icon: "https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66e2e03f9cafd6c506b94dc6_Favicon%20-32.png",
    shortcut:
      "https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66e2e03f9cafd6c506b94dc6_Favicon%20-32.png",
    apple:
      "https://cdn.prod.website-files.com/64ba4b61a6e0ed8004b57d97/66e2e03f9cafd6c506b94dc6_Favicon%20-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <DevLinkProvider>
          {/* Add here any Navbar or Header you want to be present on all pages */}
          {children}
          {/* Add here any Footer you want to be present on all pages */}
        </DevLinkProvider>
      </body>
    </html>
  );
}
