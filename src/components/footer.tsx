import Link from "next/link"
import { Code, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Adrián Castro
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/sradrii5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Code className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adri%C3%A1n-castro-meneses-b95a19214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Globe className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
