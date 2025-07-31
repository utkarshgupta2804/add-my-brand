import { Brain, Target, BarChart3, Zap, Shield, Globe } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description, image }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md hover:border-primary/40 transition-all duration-500 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Feature Image */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
          <Icon className="w-16 h-16 text-primary opacity-60" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    </div>

    <div className="relative p-6 space-y-4">
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
)

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Creation",
      description:
        "Generate compelling marketing content, social media posts, and ad copy that resonates with your audience using advanced AI algorithms.",
      image: "path/to/image1.jpg",
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description:
        "Identify and reach your ideal customers with precision targeting based on behavior, demographics, and engagement patterns.",
      image: "path/to/image2.jpg",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into campaign performance with real-time analytics, conversion tracking, and ROI optimization recommendations.",
      image: "path/to/image3.jpg",
    },
    {
      icon: Zap,
      title: "Automated Campaigns",
      description:
        "Set up intelligent marketing workflows that run on autopilot, optimizing themselves based on performance data and user behavior.",
      image: "path/to/image4.jpg",
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description:
        "Monitor your brand across all channels with AI-powered sentiment analysis and automated reputation management tools.",
      image: "path/to/image5.jpg",
    },
    {
      icon: Globe,
      title: "Multi-Channel Integration",
      description:
        "Seamlessly connect and manage campaigns across social media, email, search, and display advertising from one unified platform.",
      image: "path/to/image6.jpg",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Background blur effect */}
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />

        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-bold leading-tight md:leading-[66px] bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Supercharge Your Marketing with AI
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Discover powerful AI-driven features that transform how you create, manage, and optimize your marketing
              campaigns for maximum impact.
            </p>
          </div>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
