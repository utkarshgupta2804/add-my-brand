"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Target, BarChart3, Zap } from "lucide-react"

export function InteractiveDemo() {
  const [activeStep, setActiveStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const demoSteps = [
    {
      id: 0,
      title: "Input Your Brand",
      icon: Sparkles,
      description: "Tell our AI about your brand and target audience",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
            <label className="block text-sm font-medium text-foreground mb-2">Brand Name</label>
            <input
              type="text"
              placeholder="TechStartup Inc."
              className="w-full p-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground"
              defaultValue="TechStartup Inc."
            />
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
            <label className="block text-sm font-medium text-foreground mb-2">Target Audience</label>
            <input
              type="text"
              placeholder="Tech-savvy millennials interested in productivity"
              className="w-full p-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground"
              defaultValue="Tech-savvy millennials interested in productivity"
            />
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "AI Analysis",
      icon: Target,
      description: "Our AI analyzes market trends and competitor strategies",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">Analyzing Market Data...</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Competitor Analysis", progress: 100 },
                { label: "Audience Insights", progress: 85 },
                { label: "Trend Analysis", progress: 92 },
                { label: "Content Optimization", progress: 78 },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-primary">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Content Generation",
      icon: Zap,
      description: "Watch AI create personalized marketing content",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
            <h4 className="text-foreground font-semibold mb-4">Generated Campaign Content</h4>
            <div className="space-y-4">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h5 className="text-sm font-medium text-primary mb-2">Email Subject Line</h5>
                <p className="text-foreground">"🚀 Boost Your Productivity by 300% - Limited Time Offer!"</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h5 className="text-sm font-medium text-primary mb-2">Social Media Post</h5>
                <p className="text-foreground">
                  "Ready to transform your workflow? Our AI-powered tools help tech professionals achieve more in less
                  time. Join 10,000+ users who've already made the switch! #ProductivityHack #TechLife"
                </p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h5 className="text-sm font-medium text-primary mb-2">Ad Copy</h5>
                <p className="text-foreground">
                  "Stop wasting time on repetitive tasks. TechStartup Inc.'s smart automation saves you 15+ hours per
                  week. Try free for 14 days!"
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Performance Insights",
      icon: BarChart3,
      description: "See predicted campaign performance and optimization suggestions",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
            <h4 className="text-foreground font-semibold mb-4">Predicted Campaign Performance</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Expected CTR", value: "8.4%", trend: "+2.1%" },
                { label: "Conversion Rate", value: "12.8%", trend: "+4.2%" },
                { label: "Engagement Rate", value: "15.6%", trend: "+6.8%" },
                { label: "ROI Projection", value: "340%", trend: "+89%" },
              ].map((metric, i) => (
                <div key={i} className="bg-background/50 p-4 rounded-lg border border-primary/10 text-center">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                  <div className="text-xs text-green-400 mt-1">{metric.trend} vs industry avg</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setActiveStep(Math.min(activeStep + 1, demoSteps.length - 1))
    }, 2000)
  }

  return (
    <section className="w-full px-5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Try Our AI Marketing Assistant
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven marketing in this interactive demo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {demoSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-primary/20 to-primary/10 border-primary/40"
                      : "bg-gradient-to-r from-background/80 to-background/40 border-primary/20 hover:border-primary/30"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeStep === index ? "bg-primary" : "bg-primary/20"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${activeStep === index ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Demo Content */}
          <div className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20 rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{demoSteps[activeStep].title}</h3>
              <p className="text-muted-foreground">{demoSteps[activeStep].description}</p>
            </div>

            <div className="mb-6">{demoSteps[activeStep].content}</div>

            <div className="flex gap-3">
              {activeStep < demoSteps.length - 1 && (
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate with AI
                    </>
                  )}
                </Button>
              )}

              <Button
                variant="outline"
                onClick={() => setActiveStep(0)}
                className="border-primary/30 text-foreground hover:bg-primary/5"
              >
                Reset Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
