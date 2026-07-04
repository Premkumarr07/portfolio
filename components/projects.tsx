"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Smartphone } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "GovtPrepAI – Smart Learning App",
      description:
        "AI-powered mobile app helping students prepare for government exams like SSC, Banking, and Railways with AI chatbot integration and offline question banks. Achieved 60% improvement in test engagement.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-LDvjvAQ1hO6rYO7gSMEa4fme9ftRQP.png",
      tags: ["Flutter", "Firebase", "OpenAI API", "SQLite"],
      liveUrl: "https://github.com/Premkumarr07",
      githubUrl: "https://github.com/Premkumarr07",
    },
    {
      title: "QuickEats – Food Delivery App",
      description:
        "End-to-end food ordering and delivery app with multi-vendor support, location-based search, cart system, payment gateway, and real-time order tracking.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Travel.jpg-Qvm3VZ8fV2t6DgGpBmlA8ucB7Cb76E.jpeg",
      tags: ["Flutter", "Firebase", "Razorpay", "Google Maps API"],
      liveUrl: "https://github.com/Premkumarr07",
      githubUrl: "https://github.com/Premkumarr07",
    },
    {
      title: "ShopNest – E-Commerce App",
      description: "Full-featured shopping app with product listing, cart, wishlist, checkout, and order tracking functionality built with modern Android architecture.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thumbnail-YjqW61IL5XvxhLRPopCzqukY1CyEug.png",
      tags: ["Android SDK", "Firebase", "Jetpack Compose", "MVVM"],
      liveUrl: "https://github.com/Premkumarr07",
      githubUrl: "https://github.com/Premkumarr07",
    },
    {
      title: "RTSP Player App",
      description: "Professional IP camera video streaming application with optimized ExoPlayer buffering and real-time streaming capabilities using RTSP protocol.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Mockups%2020-C76qutQ8rEZx9T6DRdpJWxGjw1D7z2.png",
      tags: ["Android SDK", "ExoPlayer", "RTSP", "Java"],
      liveUrl: "https://github.com/Premkumarr07",
      githubUrl: "https://github.com/Premkumarr07",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">My Apps</h2>
        <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
          Check out some of my recent Android app development work
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-2 border-green-100">
                <div className="relative h-[300px] w-full bg-slate-50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    priority={index < 2}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  </div>
                  <p className="text-slate-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-[#f0f9f0] text-[#4CAF50] border-[#4CAF50]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#f0f9f0]"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40]">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
