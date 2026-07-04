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
      title: "Ride Service App",
      description:
        "A comprehensive ride-sharing application with bid-based booking, city-to-city service, and advanced safety features.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-LDvjvAQ1hO6rYO7gSMEa4fme9ftRQP.png",
      tags: ["Kotlin", "MVVM", "Google Maps", "Real-time Tracking", "Payment Gateway"],
      liveUrl: "https://play.google.com/store/example",
      githubUrl: "https://github.com/premkumar/ride-app",
    },
    {
      title: "Travel Companion App",
      description:
        "A feature-rich travel app with destination discovery, scheduling, package booking, and in-app messaging.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Travel.jpg-Qvm3VZ8fV2t6DgGpBmlA8ucB7Cb76E.jpeg",
      tags: ["Java", "Firebase", "Maps Integration", "Real-time Chat"],
      liveUrl: "https://play.google.com/store/example",
      githubUrl: "https://github.com/premkumar/travel-app",
    },
    {
      title: "Fashion E-Commerce App",
      description: "An elegant fashion shopping app with seamless browsing, cart management, and secure checkout.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thumbnail-YjqW61IL5XvxhLRPopCzqukY1CyEug.png",
      tags: ["Kotlin", "MVVM", "Payment Integration", "Firebase Auth"],
      liveUrl: "https://play.google.com/store/example2",
      githubUrl: "https://github.com/premkumar/fashion-app",
    },
    {
      title: "RTSP Streaming App",
      description: "A professional live streaming application with profile management and comprehensive help system.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Mockups%2020-C76qutQ8rEZx9T6DRdpJWxGjw1D7z2.png",
      tags: ["Java", "ExoPlayer", "RTSP Protocol", "Material Design"],
      liveUrl: "https://play.google.com/store/example2",
      githubUrl: "https://github.com/premkumar/streaming-app",
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
                      <Badge key={tagIndex} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="rounded-full bg-green-500 hover:bg-green-600">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Play Store
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

