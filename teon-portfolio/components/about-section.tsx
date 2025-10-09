import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Code2, TrendingUp, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Teon, an 18-year-old student who's passionate about Forex trading and Web3 development. I enjoy
                learning new skills, building creative projects, and improving my mindset for consistency and success.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My goal is to grow in both finance and tech while creating something impactful. I believe in the power
                of decentralized technology to transform how we interact with money and digital assets.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding smart contracts or analyzing charts, I'm constantly learning and exploring new
                technologies to stay ahead in this rapidly evolving space.
              </p>
              <Button size="lg" className="rounded-full">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="grid gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Smart Contract Developer</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building secure and efficient decentralized applications on blockchain networks
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Software Engineering Student</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Continuously learning and applying modern software development practices
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Forex Trader</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Analyzing markets and executing strategic trades with technical analysis
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
