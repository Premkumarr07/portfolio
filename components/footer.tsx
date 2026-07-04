import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-slate-800">
              Prem Kumar
            </a>
            <p className="text-slate-600 mt-1">Android Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Premkumarr07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-700 hover:text-[#FF9500] transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/premkumar07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-700 hover:text-[#FF9500] transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Android100X"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-slate-700 hover:text-[#FF9500] transition-all"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/android100dev/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-700 hover:text-[#FF9500] transition-all"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-6 pt-6 text-center text-sm text-slate-600">
          <p>© {currentYear} Prem Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
