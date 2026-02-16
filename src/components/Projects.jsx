import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section className="pb-20">
      {/* Heading */}
      <motion.h2
        className="my-14 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10"
          >
            {/* IMAGE SIDE */}
            <motion.div
              variants={imageVariants}
              className="w-full lg:w-1/2 flex items-center justify-center bg-stone-900/40 rounded-xl overflow-hidden relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-80 max-h-80 object-contain"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-white"
                  >
                    Live
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-stone-800 px-5 py-2 text-sm font-medium text-white"
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* TEXT SIDE */}
            <motion.div
              variants={textVariants}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#06b6d4",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
