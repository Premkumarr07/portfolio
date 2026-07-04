"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1a212e]">About Me</h2>

        {/* Circular Photo Frame with Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40 rounded-full border-4 border-[#4CAF50] overflow-hidden shadow-lg">
            <div className="absolute inset-0 border-4 border-dashed border-[#4CAF50] rounded-full animate-slow-spin"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1688210744190.jpg-P0bFmmpVq7aMMxuVavaWWSiSjw6S8C.jpeg"
              alt="Prem Kumar"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#343a40] mb-6">
            I&apos;m a passionate Android developer with <span className="font-semibold text-[#4CAF50]">2+ years</span>{" "}
            of experience in creating innovative and user-friendly mobile applications. My expertise includes{" "}
            <span className="font-semibold">Java, Kotlin</span>, and the latest Android development tools and libraries.
          </p>
          <p className="text-lg text-[#343a40] mb-6">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying a good cup of coffee while brainstorming my next big app idea.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-6">
          <a
            href="/Prem_Kumar.pdf"
            download
            className="px-6 py-3 bg-[#4CAF50] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#3d8b40] transition-all duration-300 flex items-center"
          >
            <i className="fas fa-download mr-2"></i> Resume
          </a>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/Premkumarr07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#343a40] hover:text-[#4CAF50] transition-all"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/premkumar07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#343a40] hover:text-[#4CAF50] transition-all"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://x.com/Android100X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#343a40] hover:text-[#4CAF50] transition-all"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/android100dev/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#343a40] hover:text-[#4CAF50] transition-all"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

