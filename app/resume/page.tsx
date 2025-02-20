import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      {/* Header with navigation and download button */}
      <div className="container mx-auto mb-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      {/* Main resume content */}
      <div className="container mx-auto max-w-4xl space-y-8">
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
              <a
                href="https://kiernendabbs.vercel.app"
                className="text-primary hover:underline"
              >
                kiernendabbs.vercel.app
              </a>
            </p>
            <p className="text-muted-foreground">Location: <strong>Saint Louis Area</strong></p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
