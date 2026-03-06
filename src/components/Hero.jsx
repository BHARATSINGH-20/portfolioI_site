import { motion } from "framer-motion"
import profilepic from "../assets/BHARATSINGHPROFILE.png"
import { HERO_CONTENT } from "../constants"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback, useState, useEffect } from "react"

const roles = ["Frontend Developer", "React Developer", "UI Enthusiast"]

const Hero = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    // Typing Animation Logic
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)

    useEffect(() => {

        if (subIndex === roles[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000)
            return
        }

        if (subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % roles.length)
            return
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, reverse ? 40 : 80)

        setText(roles[index].substring(0, subIndex))

        return () => clearTimeout(timeout)

    }, [subIndex, index, reverse])

    return (
        <section className="relative pb-24 overflow-hidden overflow-x-hidden w-full">

            {/* Particle Background */}
            <Particles
                init={particlesInit}
                className="absolute top-0 left-0 w-full h-full -z-10"
                options={{
                    fullScreen: false,
                    particles: {
                        number: { value: 60 },
                        size: { value: 2 },
                        move: { speed: 1 },
                        opacity: { value: 0.4 },
                    },
                }}
            />

            {/* Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl animate-pulse" />

            <div className="flex flex-wrap lg:flex-row-reverse items-center">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center overflow-hidden">

                    <div className="overflow-hidden rounded-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow"
                            style={{ animationDuration: "8s" }}
                        >
                            <img
                                src={profilepic}
                                alt="Bharat Singh"
                                className="w-64 lg:w-72 rounded-3xl border border-stone-800 bg-black"
                            />
                        </motion.div>
                    </div>

                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10 text-center lg:text-left px-4">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl lg:text-7xl font-bold"
                    >
                        BHARAT SINGH
                    </motion.h2>

                    {/* Typing Role */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 text-2xl lg:text-3xl font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                    >
                        {text}
                        <span className="animate-pulse">|</span>
                    </motion.span>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="my-6 max-w-lg text-stone-300"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.a
                        href="src\assets\BHARATSINGH_RESUME.pdf"
                        download
                        className="inline-flex items-center justify-center px-6 py-3 mt-4 rounded-full font-medium bg-white text-black shadow-lg self-center lg:self-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            backgroundColor: "#b19174",
                            color: "#ffffff",
                        }}
                        whileTap={{
                            backgroundColor: "#9ca3af",
                            color: "#111827",
                        }}
                    >
                        Download Resume
                    </motion.a>

                </div>

            </div>
        </section>
    )
}

export default Hero
