"use client"

import { useState } from "react"
import { Check, Sparkles, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Starter",
      icon: Rocket,
      monthlyPrice: "$29",
      annualPrice: "$24",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generation (1,000 pieces/month)",
        "Basic Analytics Dashboard",
        "2 Social Media Accounts",
        "Email Campaign Builder",
        "Standard Support",
        "Brand Monitoring",
      ],
      buttonText: "Start Free Trial",
      buttonClass:
        "bg-gradient-to-r from-primary/20 to-primary/30 text-foreground border border-primary/30 hover:from-primary/30 hover:to-primary/40",
      popular: false,
    },
    {
      name: "Professional",
      icon: Sparkles,
      monthlyPrice: "$79",
      annualPrice: "$64",
      description: "Ideal for growing marketing teams",
      features: [
        "AI Content Generation (5,000 pieces/month)",
        "Advanced Analytics & Insights",
        "10 Social Media Accounts",
        "Multi-Channel Campaign Management",
        "A/B Testing & Optimization",
        "Priority Support",
        "Custom Brand Voice Training",
        "Competitor Analysis",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      monthlyPrice: "$199",
      annualPrice: "$159",
      description: "For large organizations and agencies",
      features: [
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Unlimited Social Media Accounts",
        "White-label Solutions",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Advanced API Access",
        "Custom Integrations",
      ],
      buttonText: "Contact Sales",
      buttonClass:
        "bg-gradient-to-r from-foreground to-foreground/80 text-background hover:from-foreground/90 hover:to-foreground/70 shadow-lg",
      popular: false,
    },
  ]

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-bold leading-tight md:leading-[40px] bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Choose Your AI Marketing Plan
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-lg font-medium leading-tight max-w-2xl">
            Scale your marketing efforts with flexible pricing designed to grow with your business. All plans include
            our core AI features.
          </p>
        </div>
        <div className="pt-8">
          <div className="p-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 flex justify-start items-center gap-1">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 flex justify-center items-center gap-2 rounded-lg font-medium transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Annual</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Save 20%</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 flex justify-center items-center rounded-lg font-medium transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-12 max-w-[1200px] mx-auto">
        {pricingPlans.map((plan) => {
          const IconComponent = plan.icon
          return (
            <div
              key={plan.name}
              className={`group flex-1 p-6 overflow-hidden rounded-2xl flex flex-col justify-start items-start gap-6 backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-xl relative"
                  : "bg-gradient-to-br from-background/80 to-background/40 border-primary/20 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-primary/80"
                          : "bg-gradient-to-r from-primary/20 to-primary/10"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      {plan.popular && <div className="text-sm text-primary font-medium">Recommended</div>}
                    </div>
                  </div>

                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-start items-baseline gap-2">
                      <div className="relative h-12 flex items-center text-4xl font-bold text-foreground">
                        <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: isAnnual ? 1 : 0,
                            transform: `scale(${isAnnual ? 1 : 0.8})`,
                            filter: `blur(${isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={!isAnnual}
                        >
                          {plan.annualPrice}
                        </span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: !isAnnual ? 1 : 0,
                            transform: `scale(${!isAnnual ? 1 : 0.8})`,
                            filter: `blur(${!isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={isAnnual}
                        >
                          {plan.monthlyPrice}
                        </span>
                      </div>
                      <div className="text-muted-foreground text-lg font-medium">/month</div>
                    </div>
                    <div className="text-muted-foreground text-base font-medium">{plan.description}</div>
                  </div>
                </div>

                <Button
                  className={`self-stretch py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-foreground text-sm font-semibold">Everything included:</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="self-stretch flex justify-start items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 text-muted-foreground text-sm font-medium leading-relaxed">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
