"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "ScholarScout",
      shortDescription: "AI-powered Faculty Intelligence & Academic Profiling Tool",
      description:
        "An AI-powered academic data extraction and enrichment tool designed to collect faculty information from university websites.",
      image: "/ScholarScout.png",
      tags: ["Python", "Streamlit", "AI"],
      features: [
        "High-confidence outputs",
        "Deterministic rules",
        "Academic databases",
        "LLM reasoning",
      ],
      demoLink: "https://scholarscout-forphd.streamlit.app/",
      githubLink: "https://github.com/Tian-Timm/ScholarScout",
      fullDescription:
        "Designed for PhD applicants, ScholarScout is an AI-powered academic data extraction and enrichment tool. It collects faculty information from university websites and generates reliable research profiles. Rather than chasing full automation, it prioritizes high-confidence outputs by combining deterministic rules, academic databases, and LLM reasoning—delivering results that are fast to review and easy to trust.",
    },
    {
      id: 2,
      title: "PrivacyBlur",
      shortDescription: "The privacy-first redaction tool. Zero data collection. 100% Client-side.",
      description:
        "A secure, client-side tool for developers to redact sensitive information from images and PDFs without data leaving the browser.",
      image: "/PrivcyBlur.png",
      tags: ["Next.js", "Tailwind CSS", "Canvas API", "Local-First"],
      features: [
        "Local-First Privacy: Zero Server Uploads",
        "Chameleon Text Overlay: Smart Blending",
        "Drag & Drop Redaction",
        "Multi-Page PDF Support",
      ],
      demoLink: "https://privacy-blur-tool.vercel.app/",
      githubLink: "https://github.com/Tian-Timm/privacy-blur",
      fullDescription:
        "PrivacyBlur is built on a 'Vibecoding' stack (Next.js 14, Tailwind, HTML5 Canvas) to ensure speed and aesthetics. It processes everything locally in the browser memory, meaning sensitive data like ID cards or contracts never touches a server. Features like 'Chameleon Text Overlay' automatically blend redacted text with the background, and the tool supports full multi-page PDF workflows with lazy loading.",
    },
    {
      id: 3,
      title: "Heart Disease Risk Analysis",
      shortDescription: "Data mining pipeline on 2022 BRFSS dataset for heart disease prediction.",
      description:
        "A complete data science pipeline analyzing the 2022 BRFSS dataset to predict heart disease risk using rigorous statistical methods and machine learning.",
      image: "/heart_disease_analysis.png",
      tags: ["Python", "Scikit-learn", "Data Mining", "Statistics"],
      features: [
        "Precise Data Cleaning (IQR & Logic)",
        "Statistical Feature Selection (Chi-square/Pearson)",
        "Imbalance Handling (SMOTE/ROS)",
        "Association Rule Mining",
      ],
      demoLink: "https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease/data",
      githubLink: "https://github.com/Tian-Timm/Heart-Disease-Risk-Analysis-Data-Mining",
      fullDescription:
        "Based on the CDC's 2022 Behavioral Risk Factor Surveillance System (BRFSS), this project implements a rigorous data science workflow. It tackles data quality issues through logic-based cleaning and outlier removal, validates feature importance via statistical tests (Chi-square, Pearson), and addresses severe class imbalance using advanced sampling techniques (ROS, SMOTE). The goal is to build reliable predictive models for heart disease risk.",
    },
    {
      id: 4,
      title: "The Bias Detective",
      shortDescription: "An AI-Powered Interface for Epistemic Diversity.",
      description:
        "A cognitive tool designed to break echo chambers by analyzing news events through three distinct analytical lenses simultaneously.",
      image: "/The Bias Detective.png",
      tags: ["Streamlit", "OpenAI API", "Concurrent.futures"],
      features: [
        "Parallel Intelligence (Wait time ~3s)",
        "Rashomon Engine (3 Perspectives)",
        "BYOK Privacy Architecture",
        "Mock Mode for Demonstration",
      ],
      demoLink: "https://the-bias-detective.streamlit.app/",
      githubLink: "https://github.com/Tian-Timm/The-Bias-Detective",
      fullDescription:
        "Inspired by the Rashomon Effect, this tool forces us to confront the reality that truth is often a matter of perspective. It uses the 'Rashomon Engine' to analyze events from three personas: The Establishment (Order), Follow the Money (Economics), and The Subtext (Power Dynamics). Built with parallel processing for speed and a privacy-first BYOK architecture.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
