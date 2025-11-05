"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" }: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const node = ref.current // capture current ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    if (node) observer.observe(node)

    return () => {
      // use captured node to avoid "ref.current changed" warning
      if (node) observer.unobserve(node)
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return { ref, isIntersecting }
}
