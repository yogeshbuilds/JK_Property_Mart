export function HeroSection() {
  return (
<section
  id="home"
  className="relative h-[70vh] overflow-hidden"
>
      <div className="absolute inset-0">
        <img
          src="/faridabad-city-skyline-with-modern-buildings-and-g.jpg"
          alt="Faridabad City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance mb-2 sm:mb-4 md:mb-6 mt-10">
            Find Your Dream Property
            <span className="block text-yellow-400 mt-2">Find Your Happiness</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-pretty opacity-90 px-4 mt-[200px]">
            With 20 years of experience in Faridabad real estate, we help you discover the perfect residential and
            commercial properties.
          </p>
        </div>
      </div>
    </section>
  )
}