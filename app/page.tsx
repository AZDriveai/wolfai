import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to <span className="text-primary">Next.js</span> Community Starter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern starter template with shadcn/ui components and theme support to help you build beautiful web
            applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/your-username/next-community-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
