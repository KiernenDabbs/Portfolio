import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 slide-fwd-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below or reach out through social media.</CardDescription>
          </CardHeader>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          <CardContent>
              <Input className="mb-2" type="hidden" name="access_key" value="d27f2f36-87c3-4f14-b3b8-4d8a960622e4"/>
              <Input className="mb-2" required name="name" type="text" placeholder="Your Name" />
              <Input className="mb-2" required name="email" type="email" placeholder="Your Email" />
              <Textarea required name="message" placeholder="Your Message" />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="https://github.com/KiernenDabbs" className="text-muted-foreground hover:text-primary hovermouse">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/kiernen-dabbs/" className="text-muted-foreground hover:text-primary hovermouse">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hovermouse">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <Button className="hovermouse" type="submit">Send Message</Button>
          </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}