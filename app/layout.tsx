import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';

import { ActiveThemeProvider } from '@/components/active-theme';
import { DEFAULT_THEME } from '@/lib/themes';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { WalletConnectionModal } from "@/components/wallet-connection-modal";
import { DemoProvider } from "@/context/demo-context";
import { CommunityProvider } from "@/context/community-context";
import WagmiComponentProvider from "@/components/WagmiComponentProvider";
import { WalletProvider } from "@/context/wallet-context";
import { Toaster } from "@/components/ui/toaster";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WAGA Protocol | Blockchain-Powered Coffee Traceability",
  description:
    "Transforming the coffee value chain with blockchain technology for transparency, traceability, and financial empowerment.",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeSettings = {
      preset: (cookieStore.get('theme_preset')?.value ?? DEFAULT_THEME.preset) as any,
      scale: (cookieStore.get('theme_scale')?.value ?? DEFAULT_THEME.scale) as any,
      radius: (cookieStore.get('theme_radius')?.value ?? DEFAULT_THEME.radius) as any,
      contentLayout: (cookieStore.get('theme_content_layout')?.value ??
          DEFAULT_THEME.contentLayout) as any,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <WagmiComponentProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ActiveThemeProvider initialTheme={themeSettings}>
              <WalletProvider>
                <DemoProvider>
                  <CommunityProvider>
                    <div className="flex min-h-screen flex-col ">
                      <Navbar />
                      <main className="flex-1">{children}</main>
                      <Footer />
                    </div>
                    <WalletConnectionModal />
                    <Toaster />
                  </CommunityProvider>
                </DemoProvider>
              </WalletProvider>

            </ActiveThemeProvider>
          </ThemeProvider>
        </WagmiComponentProvider>
      </body>
    </html>
  );
}
