import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Luo | Front-End Developer Portfolio",
  description:
    "Discover more about Alex Luo, a skilled front-end developer with experience in React, Next.js, and TypeScript. Learn about his expertise and projects.",
  keywords:
    "Alex Luo, front-end developer, React developer, Next.js, TypeScript, web development, developer portfolio, JavaScript developer, front-end technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="p-5 md:p-10 bg-[#fafafa] text-[#3a3a3a] text-center text-base">
          <p>© 2024 Alex Luo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
