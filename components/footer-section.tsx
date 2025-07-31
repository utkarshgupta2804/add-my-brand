"use client"

import { Twitter, Github, Linkedin, Facebook, Instagram, Sparkles } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col gap-12 py-16 md:py-20 border-t border-primary/10">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section: Logo, Description, Social Links */}
        <div className="flex flex-col justify-start items-start gap-6 max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              ADmyBRAND
            </span>
          </div>
          <p className="text-muted-foreground text-base font-medium leading-relaxed">
            Revolutionizing marketing with AI-powered automation, personalized campaigns, and data-driven insights that
            drive real results for businesses worldwide.
          </p>
          <div className="flex justify-start items-start gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1 max-w-2xl">
          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-foreground text-sm font-semibold leading-5">Product</h3>
            <div className="flex flex-col justify-start items-start gap-3">
              <a
                href="#features-section"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#pricing-section"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Integrations
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                API
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Security
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-foreground text-sm font-semibold leading-5">Solutions</h3>
            <div className="flex flex-col justify-start items-start gap-3">
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Content Creation
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Campaign Management
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Analytics
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Automation
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Brand Monitoring
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-foreground text-sm font-semibold leading-5">Company</h3>
            <div className="flex flex-col justify-start items-start gap-3">
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Press
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Partners
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-foreground text-sm font-semibold leading-5">Resources</h3>
            <div className="flex flex-col justify-start items-start gap-3">
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Community
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm font-normal leading-5 hover:text-primary transition-colors duration-300"
              >
                Status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary/10">
        <div className="text-muted-foreground text-sm">© 2024 ADmyBRAND AI Suite. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
