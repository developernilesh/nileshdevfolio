"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"
import { EXPERIENCES } from "@/constants/data"
import { getExperienceIcon, getExperienceColor } from "@/lib/utils"

const experiences = EXPERIENCES

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIcon = (type: string) => {
    return getExperienceIcon(type)
  }

  const getColor = (type: string) => {
    return getExperienceColor(type)
  }

  return (
    <section id="experience" className="py-20 bg-[#0f0f0f]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experience, education, and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-teal-400"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${getColor(experience.type)} rounded-full border-4 border-[#0f0f0f] z-10`}
              ></div>

              {/* Content Card */}
              <div className="ml-16 bg-[#1c1c1e] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 w-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getIcon(experience.type)}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                      <p className="text-blue-400 font-medium">{experience.company}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={14} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{experience.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                    <Award size={16} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
