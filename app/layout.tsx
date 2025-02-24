import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "限界ねこねこブログ",
  description: "限界ねこねこプログラマーの日常ブログにゃ！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold hover:text-gray-600">
                限界ねこねこブログ
              </Link>
              <div className="flex gap-6">
                <Link href="/about" className="hover:text-gray-600">
                  ねこねこについて
                </Link>
                <Link href="/blog" className="hover:text-gray-600">
                  ブログ一覧
                </Link>
                <Link href="/tags" className="hover:text-gray-600">
                  タグ一覧
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            © 2024 限界ねこねこブログ All rights reserved にゃ
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
} 