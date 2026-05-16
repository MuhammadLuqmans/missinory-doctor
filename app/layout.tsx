import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Geist isn't in next/font yet; Inter is the closest neutral grotesque
// and ships zero extra requests with next/font. Aliased to --font-geist
// so existing CSS keeps working unchanged.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MissionaryDoctors — Discover your calling. Fund a need. Go serve.",
  description:
    "A catalog of Christian medical mission hospitals worldwide. For those called to serve, those moved to give.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
