import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Wrapper from "./Wrapper";
import { env } from "@/env";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const baseMetadata = {
  title: {
    default: "Zulfiannafis",
    template: "%s | Zulfiannafis",
  },
  description: "Generated by create next app",
  url: env.NEXT_PUBLIC_PRODUCTION_URL,
};

const { title, description, url } = baseMetadata;


export const metadata: Metadata = {
  metadataBase:new URL(env.NEXT_PUBLIC_PRODUCTION_URL),
  title,
  description,
  keywords:["Zulfian Nafis","zulfian nafis", "zulfiannafis", "Zulfian portfolio", "portfolio zulfian nafis"],
  openGraph: {
    type:"website",
    images:[""],
    title,
    description,
    url,
    siteName:env.NEXT_PUBLIC_PRODUCTION_URL
  },
  twitter: {
    title,
    images:[""],
    description,
    site: url,
    card: "summary_large_image",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
