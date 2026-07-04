"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-slate-800">
          Prem Kumar
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center bg-white px-8 py-2 rounded-full shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group mx-4 text-lg font-medium text-slate-700 hover:text-green-600 transition"
            >
              {item}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-full text-slate-700 hover:text-green-600 hover:bg-green-50"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Menu"
            className="rounded-full text-slate-700 hover:text-green-600 hover:bg-green-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-slate-800 shadow-lg flex flex-col items-start p-6 space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button className="self-end text-slate-700 hover:text-green-600" onClick={closeMenu}>
          <X className="h-6 w-6" />
        </button>
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-lg font-medium hover:text-green-600 transition"
            onClick={closeMenu}
          >
            {item}
          </Link>
        ))}
      </motion.div>
    </header>
  );
}
