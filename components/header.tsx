import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-accent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hovermouse glowyhover">
          <Code className="w-6 h-6" />
          <span>Kiernen Dabbs</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-primary transition-colors hovermouse glowyhover">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-primary transition-colors hovermouse glowyhover">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-primary transition-colors hovermouse glowyhover">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-primary transition-colors hovermouse glowyhover">
                Resume
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors hovermouse glowyhover">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}