"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Layers, PenTool, Server, Settings, Smartphone } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Android Development",
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML Layouts"],
    },
    {
      title: "App Architecture",
      icon: <Layers className="h-8 w-8 text-green-600" />,
      skills: ["MVVM", "Clean Architecture", "Repository Pattern", "Dependency Injection", "Modularization"],
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-8 w-8 text-green-600" />,
      skills: ["Material Design", "Animation", "Custom Views", "Responsive Layouts", "Accessibility"],
    },
    {
      title: "Backend Integration",
      icon: <Server className="h-8 w-8 text-green-600" />,
      skills: ["RESTful APIs", "Retrofit", "GraphQL", "Firebase", "Room Database"],
    },
    {
      title: "App Features",
      icon: <Layout className="h-8 w-8 text-green-600" />,
      skills: ["Push Notifications", "In-App Purchases", "Authentication", "Maps Integration", "Camera/Media"],
    },
    {
      title: "DevOps & Deployment",
      icon: <Settings className="h-8 w-8 text-green-600" />,
      skills: ["CI/CD", "Google Play Console", "App Bundles", "Fastlane", "App Testing"],
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">My Skills</h2>
        <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
          Here are the technologies and tools I use to build amazing Android apps
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow border-2 border-green-100">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3 text-slate-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-slate-700">
                        <Code className="h-4 w-4 mr-2 text-green-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Android Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Android Studio",
              "Gradle",
              "Git",
              "Postman",
              "Firebase",
              "Google Play Console",
              "Figma",
              "JUnit",
              "Espresso",
              "Crashlytics",
            ].map((tech, index) => (
              <div key={index} className="bg-green-100 px-4 py-2 rounded-full text-sm text-green-800">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

