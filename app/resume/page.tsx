import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, FileText, Code } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      {/* Header with navigation and download button */}
      <div className="container mx-auto mb-8 flex justify-between items-center">
        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
          ← Back to Portfolio
        </Link>
        <Button variant="outline" asChild>
          <a href="/KiernenDabbsResume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      {/* Tabs for switching between PDF and HTML versions */}
      <div className="container mx-auto max-w-4xl">
        <Tabs defaultValue="pdf" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pdf" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              PDF Version
            </TabsTrigger>
            <TabsTrigger value="html" className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              HTML Version
            </TabsTrigger>
          </TabsList>

          {/* HTML Version */}
          <TabsContent value="html" className="space-y-8">
            {/* Header Section */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle className="text-3xl">Kiernen Dabbs</CardTitle>
                <CardDescription className="text-lg">
                  Full-Stack Developer | Problem Solver | Tech Enthusiast
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  <ExternalLink className="inline mr-2 h-4 w-4" />
                  Portfolio:{" "}
                  <a href="https://kiernendabbs.dev" className="text-primary hover:underline">
                    kiernendabbs.vercel.app
                  </a>
                </p>
                <p className="text-muted-foreground">Location: Saint Louis Area</p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Development Tutor</h3>
                      <p className="text-primary">Ranken Technical College</p>
                    </div>
                    <span className="text-muted-foreground text-sm">2024 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Worked with a team of tutors and student success workers to provide student aid</li>
                    <li>Personally mentored several students in solving critical problems with code and technology</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">District Technician</h3>
                      <p className="text-primary">Waterloo Community Unit School District</p>
                    </div>
                    <span className="text-muted-foreground text-sm">2023 - 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Repaired and updated school IT equipment in preparation for the 2023 - 2024 academic year</li>
                    <li>Worked closely with a team of experienced technicians with a passion for technology</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Associate of Information Technology</h3>
                    <p className="text-primary">Ranken Technical College</p>
                  </div>
                  <span className="text-muted-foreground text-sm">2023 - 2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Backend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "C#", "PostgreSQL", "REST APIs"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Certificate of Work Ethic Proficiency</h3>
                    <p className="text-muted-foreground">Center for Work Ethic Development</p>
                  </div>
                  <span className="text-muted-foreground text-sm">2023</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* PDF Version */}
          <TabsContent value="pdf">
            <Card className="border-accent">
            <CardContent className="p-0 aspect-[8.5/11] w-full">
                <object data="/KiernenDabbsResume.pdf" type="application/pdf" className="w-full h-full min-h-[1000px]">
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <p className="mb-4">Unable to display PDF file.</p>
                    <Button asChild variant="outline">
                      <a href="/KiernenDabbsResume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF Instead
                      </a>
                    </Button>
                  </div>
                </object>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}