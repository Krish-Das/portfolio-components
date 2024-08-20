import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/provider/Provider";

export const metadata: Metadata = {
  title: "Next Playground",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
