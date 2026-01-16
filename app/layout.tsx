import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saigon Soul",
  description: "Experience the soul of Saigon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
