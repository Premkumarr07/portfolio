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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-[#fff8f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">My Apps</h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
          Innovative Android applications built with modern technologies and best practices
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
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-[#FF9500] bg-white">
                {/* Project Image Container */}
                <div className="relative h-[280px] w-full bg-gradient-to-br from-[#fff8f0] to-[#ffe6cc] overflow-hidden border-b-2 border-[#FF9500]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-6 hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-[#FF9500] rounded-lg p-2 mt-1">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-700 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-[#fff8f0] text-[#FF9500] border border-[#FF9500] hover:bg-[#FF9500] hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-[#FFE6CC]">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 rounded-lg bg-[#FF9500] hover:bg-[#E68A00] text-white"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-lg border-[#FF9500] text-[#FF9500] hover:bg-[#fff8f0]"
                    >
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Details
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
