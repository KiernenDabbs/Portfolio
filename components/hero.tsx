import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Kiernen Dabbs</h1>
        <p className="text-xl mb-8">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
        <Button asChild>
          <a href="#projects">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

