import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below or reach out through social media.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
            </form>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <Button type="submit">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

