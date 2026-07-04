"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#FF9500]" />,
      title: "Email",
      value: "premkumarshankar2002@gmail.com",
      link: "mailto:premkumarshankar2002@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#FF9500]" />,
      title: "Phone",
      value: "+91-9456812378",
      link: "tel:+919456812378",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#FF9500]" />,
      title: "Location",
      value: "Chandigarh, Punjab",
      link: "https://maps.google.com/?q=Chandigarh,+Punjab",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Get In Touch</h2>
        <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
          Have an app idea or want to work together? Feel free to contact me!
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#FF9500] bg-gradient-to-br from-white to-[#fff8f0]">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-800">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="rounded-lg border-[#FFE6CC] focus:border-[#FF9500] focus:ring-[#FF9500]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-800">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="rounded-lg border-[#FFE6CC] focus:border-[#FF9500] focus:ring-[#FF9500]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-800">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                      className="rounded-lg border-[#FFE6CC] focus:border-[#FF9500] focus:ring-[#FF9500]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-800">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="rounded-lg border-[#FFE6CC] focus:border-[#FF9500] focus:ring-[#FF9500]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-[#FF9500] hover:bg-[#E68A00]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-[#FF9500] bg-gradient-to-br from-white to-[#fff8f0]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start hover:text-[#FF9500] transition-colors text-slate-700"
                        target={info.title === "Location" ? "_blank" : undefined}
                        rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                      >
                        <div className="mr-4 mt-1">{info.icon}</div>
                        <div>
                          <h4 className="font-medium text-slate-800">{info.title}</h4>
                          <p className="text-slate-600">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-2 text-slate-800">Available for app development:</h4>
                  <p className="text-slate-700 flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#FF9500] mr-2" />
                    Currently available for new Android app projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
