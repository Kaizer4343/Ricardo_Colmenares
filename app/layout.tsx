import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricardo Colmenares — Frontend Developer",
  description:
    "Portfolio of Ricardo Colmenares, a frontend developer specializing in React, TypeScript, and modern UI/UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
