import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import {ThemeProvider} from "@/components/theme-provider";

const ibmPlexSans = localFont({
  src: [
      {path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal'},
      {path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal'},
      {path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal'},
      {path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal'},
  ]
});

const bebasNeue  = localFont({
  src: [
      {path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal'},
  ],
    variable:  "--bebas-neue",
});

export const metadata: Metadata = {
   title: "university-library",
   description: "online library for all student",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const session = await auth()
  
  return (
    <html lang="en" suppressHydrationWarning>
    <SessionProvider session={session}>
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
      </body>
    </SessionProvider>
    </html>
  );
}
