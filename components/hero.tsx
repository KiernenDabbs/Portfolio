import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-10">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="bg-primary/20 rounded-md"></div>
        ))}
      </div>
      <div className="text-center z-10">
        <div className="flex justify-center mb-6">
          <Terminal className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Hi, I'm Kiernen Dabbs</h1>
        <p className="text-xl mb-8 text-muted-foreground">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
        <Button asChild size="lg">
          <a href="#projects">
            See My Work <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button><br /><br/>
        <Button asChild size="lg">
          <a href="./app/resume">
            View  My Resume <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}