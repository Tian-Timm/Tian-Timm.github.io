"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Dr. L. Chen",
      position: "Professor of History @ Peking University",
      content:
        "Yuntian stands out for his remarkable ability to bridge the gap between humanities and data science. His work on the Tang Dynasty Poets visualization project demonstrated not only meticulous historical research but also a sophisticated grasp of NLP and data visualization. He is a truly interdisciplinary scholar who thinks beyond traditional boundaries.",
    },
    {
      id: 2,
      name: "James R.",
      position: "Senior Product Strategy Lead @ Microsoft",
      content:
        "During his internship at STCA, Yuntian impressed the team with his sharp market intuition and structured thinking. His deep-dive reports on AI-native IDEs provided actionable insights for our product roadmap. He possesses the rare combination of strategic vision and the technical skill to execute complex data analytics.",
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      position: "CS Student @ Aoyama Gakuin University",
      content:
        "I had the pleasure of collaborating with Max during our exchange program in Japan. He is a reliable teammate who naturally takes the lead in solving technical bottlenecks. His passion for AI is contagious, and he always goes the extra mile to ensure the team's project—like our risk prediction model—is both technically sound and well-presented.",
    },
    {
      id: 4,
      name: "Jason L.",
      position: "AI Tech Content Creator & Developer",
      content:
        "Max has a unique gift for demystifying complex LLM architectures for a broader audience. Having seen him grow his AI community from scratch, I’m inspired by his commitment to knowledge sharing. He doesn’t just build tools; he builds pedagogical pathways that help thousands of people understand the future of AI-native coding.",
    },
    {
      id: 5,
      name: "Sarah Miller",
      position: "PhD Applicant @ Computational Social Science",
      content:
        "ScholarScout has been a game-changer for my PhD application process. The AI-powered verification tool Max developed saved me dozens of hours by automating the tedious process of faculty research. It’s rare to find a student-led project that solves such a specific, real-world pain point with this level of precision and automation.",
    },
  ]

  const getInitials = (name: string) => {
    const parts = name.split(" ")
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`
    }
    return name.substring(0, 2).toUpperCase()
  }

  return (
    <section id="testimonials" className="py-20">
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
            Endorsements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="" alt={testimonial.name} />
                          <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

