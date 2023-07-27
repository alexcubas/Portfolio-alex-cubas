"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { stylePersonalProfile } from "@/styles/theme";
import { ApplicationTranslateProvider } from "@/contexts/provider/applicationTranslateProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Exo:wght@300;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Exo:wght@300;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={stylePersonalProfile}>
            <ApplicationTranslateProvider>
              {children}
            </ApplicationTranslateProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
