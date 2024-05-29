import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const font = Questrial({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "Together Corporation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="class">
      <body className={font.className}>
      
          {children}
   
      </body>
    </html>
  );
}
