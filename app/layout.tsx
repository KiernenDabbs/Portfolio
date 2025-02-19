import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kiernen Dabbs - Developer Portfolio",
  description: "A showcase of my work and skills as a developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-background text-foreground tech-background")}>{children}</body>
    </html>
  )
}

