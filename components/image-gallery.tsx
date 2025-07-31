export function ImageGallery() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=AI+Dashboard+Analytics",
      alt: "AI Dashboard Analytics",
      title: "Real-time Analytics Dashboard",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Content+Generation+AI",
      alt: "Content Generation Interface",
      title: "AI Content Generation",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Campaign+Management",
      alt: "Campaign Management",
      title: "Multi-Channel Campaign Management",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Performance+Metrics",
      alt: "Performance Metrics",
      title: "Advanced Performance Metrics",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AI+Insights",
      alt: "AI Insights",
      title: "Intelligent Marketing Insights",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Automation+Workflows",
      alt: "Automation Workflows",
      title: "Smart Automation Workflows",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Powerful Features in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered marketing tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-foreground font-semibold text-lg">{image.title}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
