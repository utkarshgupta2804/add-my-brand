"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "ADmyBRAND AI Suite transformed our marketing strategy completely. We've seen a 300% increase in engagement and our content creation time has been cut in half. The AI-powered insights are incredibly accurate.",
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60&text=👩‍💼",
    rating: 5,
  },
  {
    quote:
      "The automation features are game-changing. Our campaigns now optimize themselves, and we're seeing better ROI than ever before. The customer support team is also exceptional - they really understand our needs.",
    name: "Marcus Rodriguez",
    company: "GrowthLab Inc",
    role: "CEO",
    avatar: "/placeholder.svg?height=60&width=60&text=👨‍💼",
    rating: 5,
  },
  {
    quote:
      "As a small business owner, I was skeptical about AI marketing tools. But ADmyBRAND made it so simple to create professional campaigns. Our sales have increased by 150% in just 3 months.",
    name: "Emily Watson",
    company: "Bloom Boutique",
    role: "Founder",
    avatar: "/placeholder.svg?height=60&width=60&text=👩‍🚀",
    rating: 5,
  },
  {
    quote:
      "The multi-channel integration is seamless. We can manage everything from one dashboard - social media, email campaigns, and analytics. It's like having an entire marketing team in one platform.",
    name: "David Kim",
    company: "InnovateCorp",
    role: "Head of Marketing",
    avatar: "/placeholder.svg?height=60&width=60&text=👨‍💻",
    rating: 5,
  },
  {
    quote:
      "The AI content generation is incredibly sophisticated. It understands our brand voice perfectly and creates content that resonates with our audience. Our engagement rates have never been higher.",
    name: "Lisa Thompson",
    company: "Creative Studios",
    role: "Creative Director",
    avatar: "/placeholder.svg?height=60&width=60&text=👩‍🎨",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center py-8 md:py-16">
      <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Loved by Marketing Teams Worldwide
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-lg font-medium leading-tight max-w-2xl">
            Join thousands of businesses that have transformed their marketing with ADmyBRAND AI Suite
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Main testimonial display */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20 p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full border-2 border-primary/20"
              />
              <div className="text-left">
                <div className="text-foreground text-lg font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
