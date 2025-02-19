import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Developer Portfolio",
  description: "A showcase of my work and skills as a developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-background text-foreground")}>{children}</body>
    </html>
  )
}
