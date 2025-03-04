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
              I'm a passionate full-stack developer with a love for learning new technologies and improving my skills. 
              My journey in tech started with a curiosity about how things work, which led me to dive deep into the world of programming.
            </p>
            <p>
              With experience in both front-end and back-end technologies, I enjoy tackling complex problems and turning
              ideas into reality. When I'm not coding, many times I'm looking into new technologies to enhance my projects.
            </p>
          </CardContent>
          <CardHeader>
            <CardTitle>Coding Local and Broad</CardTitle>
            <CardDescription>Based in the Saint Louis Area</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I was born and raised in the Saint Louis area, where I currently reside. I have a passion for building
              things and solving problems, which has led me to pursue a career in software development.
            </p>
            <p>
              I'm always looking for new opportunities to collaborate and work on exciting projects. If you have a project
              in mind or an interesting idea you'd like to discuss, feel free to reach out to me through <a href="#contact">the contact form</a> below.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}