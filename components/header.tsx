import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-accent">
      <nav className="navbar navbar-expand-lg container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="navbar-brand text-2xl font-bold flex items-center gap-2 hovermouse glowyhover">
          <Code className="w-6 h-6" />
          <span>Kiernen Dabbs</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link href="#about" className="nav-link hover:text-primary transition-colors hovermouse glowyhover">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link hover:text-primary transition-colors hovermouse glowyhover">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" className="nav-link hover:text-primary transition-colors hovermouse glowyhover">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resume" className="nav-link hover:text-primary transition-colors hovermouse glowyhover">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link hover:text-primary transition-colors hovermouse glowyhover">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}