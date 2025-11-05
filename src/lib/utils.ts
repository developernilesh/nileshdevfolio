import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: number): string {
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  const milliseconds = Math.floor((time % 1000) / 10)
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
}

export function getExperienceIcon(type: string): string {
  switch (type) {
    case "work":
      return "💼"
    case "education":
      return "🎓"
    case "certification":
      return "🏆"
    default:
      return "📅"
  }
}

export function getExperienceColor(type: string): string {
  switch (type) {
    case "work":
      return "from-blue-400 to-cyan-400"
    case "education":
      return "from-green-400 to-emerald-400"
    case "certification":
      return "from-purple-400 to-pink-400"
    default:
      return "from-gray-400 to-gray-600"
  }
}

export function scrollToSection(sectionId: string): void {
  document.querySelector(sectionId)?.scrollIntoView({
    behavior: "smooth",
  })
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
