"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import ConnectWalletButton from "@/components/connect-wallet-button"
import Web3Button from "@/components/web3-button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 h-auto w-full border-b transition-all duration-300 flex justify-between p-3",
          "bg-emerald-950/95 backdrop-blur-md border-emerald-500/30 navbar-glow"
        )}
      >
          <div className="">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-3xl px-4 font-bold">
                <span className="web3-dual-gradient-text-glow">WAGAProtocol</span>
              </span>
            </Link>
          </div>

          <div className="mx-auto">
            <MainNav />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ConnectWalletButton />
              <Web3Button variant="gradient" size="sm" asChild>
                <Link href="/community/register">Join Community</Link>
              </Web3Button>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-toggle md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
      </header>

      {/* Mobile menu - moved outside the header to avoid positioning issues */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto md:hidden">
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center justify-end px-4">
              <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex-1 px-4 pb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-purple-900/10 pointer-events-none"></div>
              <div className="absolute inset-0 web3-grid-bg opacity-10 pointer-events-none"></div>

              <nav className="flex flex-col space-y-4 mt-4 relative z-10">
                <Link
                  href="/#about"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#features"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#roadmap"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Roadmap
                </Link>
                <Link
                  href="/explore"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo
                </Link>
                <Link
                  href="/community/dashboard"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors py-3 border-b border-gray-800/50 navbar-link-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              </nav>

              <div className="mt-8 space-y-4 relative z-10">
                <ConnectWalletButton className="w-full" />
                <Web3Button variant="gradient" size="lg" className="w-full" asChild>
                  <Link href="/community/register">Join Community</Link>
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
