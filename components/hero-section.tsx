import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0"
    >
      {/* Enhanced SVG Background with AI-themed gradients */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_186_1134)">
            <mask
              id="mask0_186_1134"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect x="10" y="-0.84668" width="1200" height="811.693" fill="url(#paint0_linear_186_1134)" />
            </mask>
            <g mask="url(#mask0_186_1134)">
              {/* Enhanced Grid with AI-themed elements */}
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row1-${i}`}>
                  {[...Array(22)].map((_, j) => (
                    <rect
                      key={`${i}-${j}`}
                      x={-20.0891 + i * 36}
                      y={9.2 + j * 36}
                      width="35.6"
                      height="35.6"
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.15"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  ))}
                </React.Fragment>
              ))}

              {/* AI-themed highlighted squares */}
              <rect x="699.711" y="81" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.2" />
              <rect x="195.711" y="153" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.15" />
              <rect x="1023.71" y="153" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.15" />
              <rect x="123.711" y="225" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.1" />
              <rect x="1095.71" y="225" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.1" />
            </g>

            {/* Enhanced AI-themed gradients */}
            <g filter="url(#filter0_f_186_1134)">
              <path
                d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
                fill="url(#paint1_linear_186_1134)"
              />
            </g>

            <g filter="url(#filter1_f_186_1134)">
              <path
                d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                fill="url(#paint2_linear_186_1134)"
                fillOpacity="0.8"
              />
            </g>
          </g>

          <rect x="0.5" y="0.5" width="1219" height="809" rx="15.5" stroke="hsl(var(--primary))" strokeOpacity="0.1" />

          <defs>
            <filter
              id="filter0_f_186_1134"
              x="147.369"
              y="-467.818"
              width="1941.42"
              height="2035.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_186_1134" />
            </filter>
            <filter
              id="filter1_f_186_1134"
              x="-554.207"
              y="-1169.39"
              width="3216.57"
              height="3310.61"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="478.182" result="effect1_foregroundBlur_186_1134" />
            </filter>
            <linearGradient
              id="paint0_linear_186_1134"
              x1="35.0676"
              y1="23.6807"
              x2="903.8"
              y2="632.086"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_186_1134"
              x1="1118.08"
              y1="-149.03"
              x2="1118.08"
              y2="1248.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="0.578125" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_186_1134"
              x1="1054.08"
              y1="-213.03"
              x2="1054.08"
              y2="1184.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="0.578125" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
            <clipPath id="clip0_186_1134">
              <rect width="1220" height="810" rx="16" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Video Background Overlay */}
      <div className="absolute inset-0 z-5 opacity-20">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/ai-particles.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[600px] lg:max-w-[700px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
        </div>

        <h1 className="text-foreground text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Transform Your Brand with AI-Powered Marketing
          </span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          ADmyBRAND AI Suite revolutionizes your marketing strategy with intelligent automation, personalized campaigns,
          and data-driven insights that drive real results.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold text-base shadow-lg ring-1 ring-primary/20 transition-all duration-300 hover:scale-105">
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-3 rounded-full font-medium text-base backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 bg-transparent"
        >
          <Play className="w-4 h-4" />
          Watch Demo
        </Button>
      </div>
    </section>
  )
}
