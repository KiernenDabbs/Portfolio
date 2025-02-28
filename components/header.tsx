import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-accent">
      <nav className="navbar navbar-expand-lg mx-auto px-4 py-4 flex justify-between items-center">
        <a className="navbar-brand" href="#"><Code className="w-6 h-6" />Kiernen Dabbs</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-2xl font-bold flex items-center gap-2 hovermouse glowyhover" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-2xl font-bold flex items-center gap-2 hovermouse glowyhover" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-2xl font-bold flex items-center gap-2 hovermouse glowyhover" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-2xl font-bold flex items-center gap-2 hovermouse glowyhover" href="/resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-2xl font-bold flex items-center gap-2 hovermouse glowyhover" href="#contact">Contact</a>
              </li>
           </ul>
         </div>
      </nav>
    </header>
  )
}