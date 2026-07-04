"use client"

import { Button } from "@/components/ui/button"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a212e] to-[#0f1218] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#378146_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Android Developer <br />
            <span className="text-[#4CAF50]">
              <Typewriter
                words={["Prem Kumar"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-300">Turning Inspiration into Reality</p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="https://github.com/Premkumarr07" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white transition-all duration-300 shadow-md"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10 transition-all duration-300"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        {/* Android Logo - Using regular img tag for GIF animation */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Glow effect behind the Android */}
            <div className="absolute -inset-4 bg-[#4CAF50]/20 rounded-full blur-xl"></div>

            {/* Using regular img tag to ensure GIF animation works */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738773732586.gif-izVFUVeQhSCYL94X5JqdFNuErBdfua.jpeg"
              alt="Android Developer"
              className="w-64 h-64 object-contain relative z-10"
              style={{ filter: "drop-shadow(0 0 10px rgba(76, 175, 80, 0.5))" }}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-30"></div>
    </section>
  )
}

