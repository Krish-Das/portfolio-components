import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MonaSans = localFont({
  src: "../public/fonts/mona-sans/woff2/MonaSansVariable.woff2",
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Components",
  description: "Components for my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={MonaSans.className}>
      <body>{children}</body>
    </html>
  );
}
