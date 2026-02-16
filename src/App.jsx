import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="relative overflow-x-hidden text-stone-300 antialiased">

      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="relative h-full w-full bg-black">

          {/* Grid Background */}
          <div
            className="absolute inset-0
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
            linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-[size:14px_24px]"
          />

          {/* Centered Radial Glow */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              top-[-20%]
              h-[600px] w-[600px]
              sm:h-[800px] sm:w-[800px]
              lg:h-[1000px] lg:w-[1000px]
              rounded-full
              bg-[radial-gradient(circle_400px_at_center,#fbfbfb36,#000)]
            "
          />

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}
