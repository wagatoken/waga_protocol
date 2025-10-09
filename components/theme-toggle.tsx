"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="theme-toggle emerald-glow flex justify-center items-center">
      {
      theme=='light' ?  
      (<Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> ):
      (<Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />)
      }
      
      
    </Button>
  )
}
