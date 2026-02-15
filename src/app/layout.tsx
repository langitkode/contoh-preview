import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contoh",
  description: "Brand Factory Outlet Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
