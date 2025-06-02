
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionClientProvider from "./SessionClientProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionClientProvider>
          <div>
            <header>
              <h1>Excel Dashboard</h1>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/upload">Upload</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </nav>
            </header>
            <main>{children}</main>
            <footer>
              <p>&copy; {new Date().getFullYear()} Excel Dashboard. All rights reserved.</p>
            </footer>
          </div>
        </SessionClientProvider>
      </body>
    </html>
  );
}
