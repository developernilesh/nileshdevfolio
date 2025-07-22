"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import TechStack from "@/components/sections/tech-stack"
import Projects from "@/components/sections/projects"
import Timeline from "@/components/sections/timeline"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/layout/navigation"
import LoadingScreen from "@/components/layout/loading-screen"
import CoursesCertifications from "@/components/sections/courses-certifications"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-[#0f0f0f] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <CoursesCertifications />
        <Timeline />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
      </footer>
    </div>
  )
}
