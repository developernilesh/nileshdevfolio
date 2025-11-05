"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "@/constants/data";
import { getExperienceIcon, getExperienceColor } from "@/lib/utils";
import { FiArrowRight, FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = EXPERIENCES;

export default function Timeline() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Spring animation for smooth timeline growth
  const springHeight = useSpring(timelineHeight, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getIcon = (type: string) => {
    return getExperienceIcon(type);
  };

  const getColor = (type: string) => {
    return getExperienceColor(type);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-[#0f0f0f] relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Journey
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A timeline of my professional experience
            {/* , education, and achievements */}
          </motion.p>

          {/* Animated divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800 rounded-full"></div>
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-teal-400 rounded-full origin-top"
            style={{
              height: springHeight,
              opacity: timelineOpacity,
            }}
          />

          {/* Floating timeline particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${32 + Math.random() * 20}px`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {experiences.map((experience, index) => {
            return (
              <motion.div
                key={experience.id}
                className="relative flex items-start mb-16 last:mb-0"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  className="absolute left-6 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <div
                    className={`w-4 h-4 bg-gradient-to-r ${getColor(
                      experience.type
                    )} rounded-full border-4 border-[#0f0f0f] relative`}
                  >
                    {/* Pulsing ring effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${getColor(
                        experience.type
                      )} rounded-full`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content Card with enhanced animations */}
                <motion.div
                  className="ml-16 w-full"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-500 relative overflow-hidden group">
                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Animated corner accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getColor(
                        experience.type
                      )} opacity-10 rounded-bl-full`}
                      initial={{ scale: 0, rotate: 45 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-3xl"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.2 + 0.5,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            {getIcon(experience.type)}
                          </motion.span>
                          <div>
                            <motion.h3
                              className="text-xl font-bold text-white mb-1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.2 + 0.6,
                              }}
                            >
                              {experience.title}
                            </motion.h3>
                            <motion.p
                              className="text-blue-400 font-medium"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.2 + 0.7,
                              }}
                            >
                              {experience.company}
                            </motion.p>
                          </div>
                        </div>
                        <motion.div
                          className="text-right text-sm text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.8,
                          }}
                        >
                          <div className="flex items-center gap-1 mb-1">
                            <FiCalendar size={14} />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin size={14} />
                            {experience.location}
                          </div>
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                      >
                        {experience.description}
                      </motion.p>

                      <div className="space-y-3">
                        <motion.h4
                          className="text-sm font-semibold text-gray-200 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                        >
                          <FiAward size={16} className="text-yellow-400" />
                          Key Achievements
                        </motion.h4>
                        <ul className="space-y-2">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="text-sm text-gray-400 flex items-start gap-3 group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  duration: 0.5,
                                  delay:
                                    index * 0.2 + 1.1 + achievementIndex * 0.1,
                                }}
                                whileHover={{ x: 5 }}
                              >
                                <FiArrowRight
                                  size={14}
                                  className="text-blue-400 mt-0.5 group-hover:text-blue-300 transition-colors duration-200"
                                />
                                <span className="group-hover:text-gray-300 transition-colors duration-200">
                                  {achievement}
                                </span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(#1c1c1e, #1c1c1e) padding-box, linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) border-box",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Connecting line animation */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 1.2 }}
                    style={{ originY: 0 }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Timeline end indicator */}
          <motion.div
            className="absolute left-6 bottom-0 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full border-4 border-[#0f0f0f] z-20"
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: experiences.length * 0.2 + 1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p
            className="text-gray-500 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll to reveal the journey
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
