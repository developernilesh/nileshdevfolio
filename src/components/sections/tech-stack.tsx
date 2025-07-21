"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TECH_CATEGORIES } from "@/constants/data"

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-[#1c1c1e] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div
                className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color} text-xl font-bold mb-6`}
              >
                {category.title}
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + techIndex * 0.1,
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
        </motion.div>
      </div>
    </section>
  )
}
