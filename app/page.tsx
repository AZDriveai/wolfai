export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
        Welcome to Next.js Community Starter
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        A modern starter template with shadcn/ui components and theme support to help you build beautiful web
        applications.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/about"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
        <a
          href="https://github.com/yourusername/next-community-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}
