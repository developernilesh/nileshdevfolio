"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Clock,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Clock },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 px-3 py-2">
                NM
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="logo-bg"
              />
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30"
                        layoutId="active-nav"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {/* Hover background */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon and text */}
                    <div className="relative flex items-center space-x-2">
                      <item.icon
                        size={16}
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-blue-400"
                            : "text-gray-500 group-hover:text-blue-400"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, x: "-50%" }}
                      whileHover={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Enhanced Mobile Menu Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 text-white rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden absolute top-full left-4 right-4 mt-2"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-[#1c1c1e]/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30"
                              : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <item.icon
                            size={18}
                            className={`transition-colors duration-300 ${
                              isActive
                                ? "text-blue-400"
                                : "text-gray-500 group-hover:text-blue-400"
                            }`}
                          />
                          <span>{item.name}</span>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Mobile menu footer */}
                  <div className="px-4 py-3 border-t border-gray-800/50 bg-gradient-to-r from-blue-500/5 to-purple-600/5">
                    <p className="text-xs text-gray-500 text-center">
                      Scroll to navigate sections
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Floating Navigation Dots (Desktop) */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col space-y-3 p-3 bg-[#1c1c1e]/80 backdrop-blur-xl rounded-2xl border border-gray-800/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group relative p-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={item.name}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 group-hover:bg-blue-400"
                  }`}
                />

                {/* Tooltip */}
                <motion.div
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#1c1c1e] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ x: 10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  {item.name}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
