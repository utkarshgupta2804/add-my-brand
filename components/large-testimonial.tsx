import Image from "next/image"

export function LargeTestimonial() {
  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/20">
              <div className="w-full max-w-[1024px] text-center text-foreground leading-7 md:leading-10 lg:leading-[64px] font-bold text-lg md:text-3xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                "ADmyBRAND AI Suite didn't just improve our marketing—it revolutionized how we think about customer
                engagement and brand growth."
              </div>
              <div className="flex justify-start items-center gap-5">
                <Image
                  src="/placeholder.svg?height=48&width=48&text=👩‍💼"
                  alt="Jessica Davis avatar"
                  width={48}
                  height={48}
                  className="w-12 h-12 relative rounded-full border-2 border-primary/20"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-foreground text-base font-semibold leading-6">Jessica Davis</div>
                  <div className="text-muted-foreground text-sm font-normal leading-6">CMO, FutureTech Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
