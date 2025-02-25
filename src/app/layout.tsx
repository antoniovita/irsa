"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
}: Readonly<{ children: React.ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div>
              <a href="/">
              <Image
                src="/images/img1.png"
                alt="IRSA"
                width={150}
                height={100}
                className="cursor-pointer"
              />
              </a>
            </div>
            
            {/* Menu desktop */}
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#exames" className="text-gray-700 hover:text-gray-900">Exames</a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900">Sobre</a>
              <a href="/convenios" className="text-gray-700 hover:text-gray-900">Convênios</a>
              <a href="#solidario" className="text-gray-700 hover:text-gray-900">IRSA Solidário</a>
            </nav>
            {/* Botão Hamburger para mobile */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Menu mobile */}
          {menuOpen && (
            <nav className="md:hidden bg-white shadow-md">
              <div className="px-4 py-4 flex flex-col space-y-4">
                <a href="#exames" className="text-gray-700 hover:text-gray-900">Exames</a>
                <a href="#sobre" className="text-gray-700 hover:text-gray-900">Sobre</a>
                <a href="/convenios" className="text-gray-700 hover:text-gray-900">Convênios</a>
                <a href="#solidario" className="text-gray-700 hover:text-gray-900">IRSA Solidário</a>
              </div>
            </nav>
          )}
        </header>

        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
