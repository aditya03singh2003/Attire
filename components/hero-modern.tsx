"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroModern() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      title: "Summer Collection",
      subtitle: "Discover the latest trends",
      cta: "Shop Now",
      link: "/products?category=women",
    },
    {
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop",
      title: "Men's Essentials",
      subtitle: "Timeless pieces for every occasion",
      cta: "Explore",
      link: "/products?category=men",
    },
    {
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
      title: "Accessories",
      subtitle: "Complete your look",
      cta: "View Collection",
      link: "/products?category=accessories",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8 },
          }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex items-center px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            New Arrivals
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl text-white/80 mb-8">{slides[currentSlide].subtitle}</p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href={slides[currentSlide].link}>
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/categories">
                <ShoppingBag className="mr-2 h-4 w-4" />
                All Collections
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
