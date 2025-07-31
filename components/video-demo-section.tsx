"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="w-full px-5 py-16 md:py-24 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              See ADmyBRAND in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI transforms your marketing workflow in just 2 minutes
          </p>
        </div>

        <div className="relative group">
          {!isPlaying ? (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-sm">
              {/* Video Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-background/80 to-background/60 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                {/* Play Button */}
                <Button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-all duration-300 group-hover:scale-105"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>

                {/* Thumbnail Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">AI Marketing Demo</h3>
                    <p className="text-muted-foreground">2:30 minutes</p>
                  </div>
                </div>

                {/* Animated rings around play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 border-2 border-primary/30 rounded-full animate-ping" />
                  <div
                    className="absolute w-40 h-40 border-2 border-primary/20 rounded-full animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl bg-black">
              {/* Video Player */}
              <div className="aspect-video bg-black flex items-center justify-center">
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  poster="/placeholder.svg?height=600&width=800&text=AI+Marketing+Demo"
                >
                  <source src="/videos/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Close Button */}
              <Button
                onClick={() => setIsPlaying(false)}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "🎯", title: "Smart Targeting", desc: "See how AI identifies your perfect audience" },
            { icon: "✨", title: "Content Generation", desc: "Watch AI create compelling marketing copy" },
            { icon: "📊", title: "Real-time Analytics", desc: "Experience live campaign optimization" },
          ].map((feature, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-foreground">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
