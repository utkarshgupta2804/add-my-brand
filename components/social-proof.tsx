export function SocialProof() {
  const companies = [
    "TechCorp",
    "InnovateLab",
    "GrowthCo",
    "ScaleUp",
    "FutureTech",
    "NextGen",
    "SmartBiz",
    "CloudFirst",
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-muted-foreground text-sm font-medium leading-tight">
        Trusted by 10,000+ growing businesses worldwide
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {companies.map((company, i) => (
          <div
            key={i}
            className="w-full max-w-[200px] h-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
          >
            <span className="text-foreground/70 font-semibold text-lg">{company}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
