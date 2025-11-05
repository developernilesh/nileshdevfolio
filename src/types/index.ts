import { ElementType } from "react"

export interface Project {
    id: number
    title: string
    description: string
    image: string
    tech: string[]
    category: string
    liveUrl: string
    githubUrl: string
  }
  
  export interface Experience {
    id: number
    title: string
    company: string
    location: string
    period: string
    type: "work" | "education" | "certification"
    description: string
    achievements: string[]
  }
  
  export interface TechCategory {
    title: string
    color: string
    technologies: Technology[]
  }
  
  export interface Technology {
    name: string
    icon: string
  }
  
  export interface ContactInfo {
    icon: ElementType
    title: string
    value: string
    href: string
  }
  
  export interface SocialLink {
    icon: ElementType
    href: string
    border?: string
    borderhover?: string
    color: string
    bg?: string
  }
  
  export interface FloatingIcon {
    icon: ElementType
    delay: number
    x: string
    y: string
  }
  
  export interface FormData {
    name: string
    email: string
    message: string
  }
  
  export interface Value {
    icon: ElementType
    title: string
    description: string
  }
  