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
          "fixed top-0 z-50 w-full bg-foreground/40 backdrop-blur ",
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80 md:px-28 px-6">
            <span className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">WAGA</span>
              -
              <span className="text-foreground">Protocol</span>
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center ">
            <MainNav />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <ConnectWalletButton />
              <Web3Button variant="gradient" size="sm" asChild>
                <Link href="/community/register">Join Community</Link>
              </Web3Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '': <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="h-16 flex items-center justify-end w-full px-4 border-b border-border/40">
              
              <button
                className="p-2 hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/#about"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#features"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#roadmap"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Roadmap
                </Link>
                <Link
                  href="/explore"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo
                </Link>
                <Link
                  href="/community/dashboard"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              </div>

              {/* Mobile actions */}
              <div className="mt-8 space-y-3 pb-6">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <ConnectWalletButton />
                <Web3Button variant="gradient" size="lg" className="w-full" asChild>
                  <Link href="/community/register">Join Community</Link>
                </Web3Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
