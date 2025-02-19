import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

