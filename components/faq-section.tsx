"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is ADmyBRAND AI Suite and how does it work?",
    answer:
      "ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that automates content creation, campaign optimization, and audience targeting. It uses advanced machine learning algorithms to analyze your brand, audience, and market trends to create personalized marketing strategies that drive results.",
  },
  {
    question: "How quickly can I see results with ADmyBRAND?",
    answer:
      "Most customers see initial improvements within the first week of implementation. Significant results, including increased engagement rates and improved ROI, typically become apparent within 30 days. Our AI continuously learns and optimizes, so performance improves over time.",
  },
  {
    question: "Can ADmyBRAND integrate with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND seamlessly integrates with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your existing tech stack.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We take data security seriously and employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and remains completely under your control.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, and personalized onboarding. Professional and Enterprise plans include dedicated account managers and priority support channels.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to all features until the end of your current billing period. We also offer a 14-day free trial so you can test all features risk-free.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }

  return (
    <div
      className={`w-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20 overflow-hidden rounded-2xl transition-all duration-500 ease-out cursor-pointer hover:border-primary/40 ${
        isOpen ? "shadow-lg" : ""
      }`}
      onClick={handleClick}
    >
      <div className="w-full px-6 py-6 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-lg font-semibold leading-7 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-primary transition-all duration-500 ease-out ${
              isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-6 transition-all duration-500 ease-out ${
            isOpen ? "pb-6 pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"
          }`}
        >
          <div className="text-muted-foreground text-base font-normal leading-7 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />

      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[600px] text-center text-foreground text-4xl md:text-5xl font-bold leading-tight break-words bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-lg font-medium leading-relaxed break-words max-w-2xl">
            Everything you need to know about ADmyBRAND AI Suite and how it can transform your marketing strategy
          </p>
        </div>
      </div>

      <div className="w-full max-w-[800px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
