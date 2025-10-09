import { Card } from "@/components/ui/card"
import { Code2, Blocks, Globe, Brain, TrendingUp } from "lucide-react"

const skillCategories = [
  {
    title: "Blockchain & Web3",
    icon: Blocks,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Solidity", "Smart Contracts", "Somnia Network", "Web3.js", "DeFi Protocols"],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: ["React", "HTML/CSS", "JavaScript", "Next.js", "Responsive Design"],
  },
  {
    title: "Programming",
    icon: Code2,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Python", "TypeScript", "Git", "RESTful APIs", "Data Structures"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    skills: ["LLM Integration", "Prompt Engineering", "AI Tools", "Automation", "Data Analysis"],
  },
  {
    title: "Trading & Finance",
    icon: TrendingUp,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    skills: ["Technical Analysis", "Chart Patterns", "Risk Management", "Market Psychology", "Trading Strategies"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
