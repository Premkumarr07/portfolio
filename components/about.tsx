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
          <p className="text-lg text-[#343a40] mb-2 font-semibold">
            Chandigarh, Punjab | +91-9456812378 | premkumarshankar2002@gmail.com
          </p>
          <p className="text-lg text-[#343a40] mb-6">
            Motivated and detail-oriented Android Developer with hands-on experience in building scalable, user-friendly, and AI-enhanced mobile applications. Passionate about crafting efficient solutions and delivering seamless digital experiences.
          </p>
          
          <div className="bg-white rounded-lg p-6 border border-[#4CAF50] mb-6">
            <h3 className="text-xl font-bold text-[#1a212e] mb-4">Current Experience</h3>
            <p className="text-[#343a40] mb-2"><span className="font-semibold">Android Developer</span> at Antworks money (Aug 2025 – Present)</p>
            <ul className="text-sm text-[#343a40] space-y-1">
              <li>✓ Maintaining and updating Android applications for improved performance and stability</li>
              <li>✓ Implemented new features and resolved production bugs to enhance user experience</li>
              <li>✓ Optimized app performance and improved API integration efficiency</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f0f9f0] p-4 rounded-lg border border-[#4CAF50]">
              <p className="text-sm text-[#4CAF50] font-semibold">Education</p>
              <p className="text-[#343a40] font-semibold">B.E. Electronics & Communication</p>
              <p className="text-sm text-[#343a40]">Chandigarh University (2021-2025)</p>
            </div>
            <div className="bg-[#f0f9f0] p-4 rounded-lg border border-[#4CAF50]">
              <p className="text-sm text-[#4CAF50] font-semibold">Certifications</p>
              <p className="text-[#343a40] font-semibold">Android Development</p>
              <p className="text-sm text-[#343a40]">UI/UX Design (Figma)</p>
            </div>
            <div className="bg-[#f0f9f0] p-4 rounded-lg border border-[#4CAF50]">
              <p className="text-sm text-[#4CAF50] font-semibold">Languages</p>
              <p className="text-[#343a40] font-semibold">Kotlin, Java, Dart</p>
              <p className="text-sm text-[#343a40]">SQL, JavaScript, HTML/CSS</p>
            </div>
          </div>
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
