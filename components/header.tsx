import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kiernen Dabbs
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Button asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

