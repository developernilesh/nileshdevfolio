"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Download, MessageCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ROLES, FLOATING_ICONS, SOCIAL_LINKS } from "@/constants/data"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  // Remove the local roles array and use ROLES from constants
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)

      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative overflow-hidden" ref={heroRef}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border border-blue-400/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      {FLOATING_ICONS.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/20 pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + index,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon size={40} />
        </motion.div>
      ))}

      {/* Interactive cursor follower */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none opacity-20 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Enhanced greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm">
              👋 Welcome to my digital space
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I&apos;m&nbsp;
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Nilesh Mukherjee
            </motion.span>
          </motion.h1>

          {/* Enhanced role animation */}
          <motion.div
            className="text-2xl md:text-3xl text-gray-300 mb-4 h-12 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {ROLES[currentRole]}
            </motion.span>

            {/* Typing cursor */}
            <motion.span
              className="inline-block w-0.5 h-8 bg-blue-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I craft exceptional digital experiences with modern technologies. Passionate about creating scalable,
            user-friendly applications that make a difference in people&apos;s lives.
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="/Nilesh_Resume.pdf"
              download="NILESH_MUKHERJEE_RESUME.pdf"
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            <motion.button
              className="relative border border-gray-600 hover:border-teal-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-teal-400/10 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Let&apos;s Talk</span>
            </motion.button>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                className={`relative p-3 rounded-full text-gray-500 ${social.color} ${social.bg} transition-all duration-300 border ${social.border} backdrop-blur-sm`}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <social.icon size={24} />

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-current opacity-0"
                  whileHover={{
                    scale: [1, 1.5],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="relative w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer group mx-auto"
          whileHover={{ scale: 1.1 }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Glow effect */}
          <motion.div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        <motion.p
          className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/5 pointer-events-none" />
    </section>
  )
}
