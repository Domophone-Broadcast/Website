import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domophone: The next generation doorbell",
  description: "Domophone is a brand new way to alert you when someone is in front of your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
