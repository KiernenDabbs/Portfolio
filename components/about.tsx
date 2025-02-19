import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 bg-secondary/20 slide-fwd-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card>
          <CardHeader>
            <CardTitle>My Journey</CardTitle>
            <CardDescription>From curious learner to professional developer</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I'm a passionate full-stack developer with a love for creating efficient, scalable, and user-friendly
              applications. My journey in tech started with a curiosity about how things work, which led me to dive deep
              into the world of programming.
            </p>
            <p>
              With experience in both front-end and back-end technologies, I enjoy tackling complex problems and turning
              ideas into reality. When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through blog posts and community events.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

