import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Skyblock Guild Leaderboard",
      description: "A comprehensive leaderboard containing various statistics for guilds of the Minecraft minigame Hypixel Skyblock.",
      tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      liveUrl: "https://guildlb.com",
      githubUrl: "https://github.com/treeot/leaderboard",
    },
    {
      title: "Vanilla Tweaks",
      description: "A mod for Terraria that adds quality-of-life improvements and new content to the game.",
      tech: ["C#", "Shell", "Tmodloader", "Batchfile"],
      liveUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3155623287",
      githubUrl: "https://github.com/KiernenDabbs/Vanilla-Tweaks",
    },
  ]

  return (
    <section id="projects" className="py-16 slide-fwd-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

