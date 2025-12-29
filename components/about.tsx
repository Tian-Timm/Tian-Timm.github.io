"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Think</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Creator and Builder</h3>
            <p className="text-muted-foreground mb-6">
              Hi, I’m Max. I’m a senior History student at Peking University. 
            </p>
            <p className="text-muted-foreground mb-6">
              I view history not just as a collection of past events, but as a complex, iterative system. This perspective naturally led me to a fascination with AI—not as a tech-cult object, but as a powerful framework to solve concrete human problems. My work focuses on building tools that bridge humanistic insight with algorithmic efficiency, such as developing applications to detect cognitive bias or streamlining information extraction.
            </p>
            <p className="text-muted-foreground">
              I believe in "continuous system upgrades"—both for the applications I build and for myself. I treat my life as an open-source project, maintaining my physical "hardware" through rigorous training and nutrition to keep my mental "model" sharp. I’m a firm believer in High Agency: the idea that with the right tools and a bit of grit, we can reshape our own cognitive boundaries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                      <p className="text-muted-foreground">
                        I write maintainable, scalable, and efficient code following best practices and industry
                        standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Curiosity Driven</h4>
                      <p className="text-muted-foreground">
                        I follow my intuition to explore new mediums, turning vague questions into working prototypes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Fast Learner</h4>
                      <p className="text-muted-foreground">
                        I quickly adapt to new technologies and environments, constantly expanding my skill set.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
