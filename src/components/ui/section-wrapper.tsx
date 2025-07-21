"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
  background?: "dark" | "darker"
}

export default function SectionWrapper({ children, id, className, background = "dark" }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const backgroundClasses = {
    dark: "bg-[#121212]",
    darker: "bg-[#0f0f0f]",
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("py-20", backgroundClasses[background], className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  )
}
