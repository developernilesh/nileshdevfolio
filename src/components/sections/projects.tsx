"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/constants/data";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#121212]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-[#1c1c1e] text-gray-400 hover:text-white hover:bg-[#2a2a2e]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-700 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#121212] text-xs rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/developernilesh/"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View More Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
