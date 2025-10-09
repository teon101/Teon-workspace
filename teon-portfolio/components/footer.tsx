import { Github, Twitter, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Teon</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building the future of Web3 and mastering financial markets, one project at a time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a href="mailto:teonx7@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a href="https://github.com/teon101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a href="https://x.com/Teon101" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nfawa Treasure-Emmanuel. All rights reserved.
            </p>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="#home" aria-label="Back to top">
                <ArrowUp className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
