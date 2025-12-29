"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Brain, Monitor, Eye, Rocket } from "lucide-react"

export default function TechStack() {
  const toolkits = [
    {
      id: "archaeology",
      title: "Data Archaeology",
      icon: <Search className="h-6 w-6" />,
      description: "Extracting patterns from unstructured archives.",
      tools: ["Web Scraping", "Python", "SQL", "Data Cleaning"],
    },
    {
      id: "intelligence",
      title: "LLM Orchestration",
      icon: <Brain className="h-6 w-6" />,
      description: "Harnessing the power of generative models to build intelligent, context-aware applications.",
      tools: ["Foundation Models", // 代替特定的 OpenAI
    "RAG Architecture", 
    "Agentic Workflows", 
    "Semantic Engineering" ],
    },
    {
      id: "interfaces",
      title: "Narrative Interfaces",
      icon: <Monitor className="h-6 w-6" />,
      description: "Turning intuitions into interactive digital products.",
      tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
    },
    {
      id: "storytelling",
      title: "Visual Storytelling",
      icon: <Eye className="h-6 w-6" />,
      description: "Making abstract data visible and tangible.",
      tools: ["Three.js", "D3.js", "Canvas", "MDX"],
    },
    {
      id: "shipping",
      title: "Shipping Stack",
      icon: <Rocket className="h-6 w-6" />,
      description: "Building at the speed of thought with AI-native tools.",
      tools: ["Cursor", "V0", "Vercel", "Supabase"],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Creative Toolkit</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={scaleUp}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      {kit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{kit.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                    {kit.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {kit.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            I choose tools that allow me to move fast and break the barrier between idea and execution.
            For me, proficiency isn't just about syntax—it's about how fluidly I can express concepts through the medium.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
