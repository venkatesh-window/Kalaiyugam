import type { Metadata } from "next";
import { CometCursor } from "@/components/ui/CometCursor";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Kalaiyugam 2026 | The Celebration of Art",
  description: "Symphony of Emotions - Impact's flagship event at CIT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased bg-ink text-parchment overflow-x-hidden"
      >
        <CometCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
