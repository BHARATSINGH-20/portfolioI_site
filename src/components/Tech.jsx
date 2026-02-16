import { motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri"
import {
    SiJavascript,
    SiPython,
    SiHtml5,
    SiOpenjdk,
    SiPostgresql,
    SiCplusplus,
    SiC,
    SiCss3,
    SiTailwindcss,
} from "react-icons/si"

const techStack = [
    { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Python", icon: <SiPython />, color: "text-blue-400" },
    { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "Java", icon: <SiOpenjdk />, color: "text-red-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "C", icon: <SiC />, color: "text-blue-500" },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const Tech = () => {
    return (
        <section className="pb-24">

            <h2 className="my-20 text-center text-4xl font-bold tracking-wide">
                Technologies
            </h2>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group p-6 rounded-2xl 
                       bg-neutral-900/60 backdrop-blur-md 
                       border border-neutral-700
                       shadow-lg
                       transition-all duration-300
                       hover:scale-110 hover:-translate-y-2
                       hover:shadow-cyan-500/30"
                    >
                        <div className={`text-6xl ${tech.color} flex justify-center transition-transform duration-300 group-hover:rotate-6`}>
                            {tech.icon}
                        </div>

                        <p className="mt-4 text-center text-sm font-medium text-neutral-300">
                            {tech.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Tech
