"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path.includes("#")) {
      return pathname === path
    }
    return pathname?.startsWith(path)
  }

  return (
    <nav className="flex items-center gap-1">
      <Link
        href="/#about"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/#about")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        About
      </Link>
      <Link
        href="/#features"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/#features")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        Features
      </Link>
      <Link
        href="/#roadmap"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/#roadmap")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        Roadmap
      </Link>
      <Link
        href="/explore"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/explore")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        Demo
      </Link>
      <Link
        href="/community/dashboard"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/community")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        Community
      </Link>
      <Link
        href="/admin/dashboard"
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive("/admin")
            ? "text-foreground bg-accent"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        )}
      >
        Admin
      </Link>
    </nav>
  )
}
