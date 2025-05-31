'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0A0A45] text-white font-audiowide py-20 px-6 md:px-12"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          id="about-heading"
          className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-blue-400 hover:text-blue-500 focus-visible:outline-blue-400 transition-colors duration-300 cursor-default select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Short Description */}
        <motion.p
          className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I&apos;m{' '}
          <span className="text-blue-400 font-semibold">Mohamed Zaheer</span>, a passionate Full-Stack Developer with
          expertise in both frontend and backend technologies. I thrive on transforming innovative ideas into
          intuitive and user-friendly digital solutions.
        </motion.p>

        {/* Grid Info Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <article className="space-y-4 rounded-lg bg-[#111164] p-6 shadow-lg hover:shadow-blue-600/40 transition-shadow">
            <h3 className="text-xl text-blue-300 font-semibold tracking-wide">Who Am I?</h3>
            <p className="text-white/75 leading-relaxed">
              I specialize in building responsive web applications using Next.js, React, Tailwind CSS, Node.js,
              and related technologies. Currently, I&apos;m deepening my skills in cloud computing and DevOps
              to deliver scalable and high-performance solutions.
            </p>
          </article>

          <article className="space-y-4 rounded-lg bg-[#111164] p-6 shadow-lg hover:shadow-blue-600/40 transition-shadow">
            <h3 className="text-xl text-blue-300 font-semibold tracking-wide">My Mission</h3>
            <p className="text-white/75 leading-relaxed">
              To craft intuitive, accessible, and impactful web experiences that address real-world challenges
              and advance the frontiers of modern technology.
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  )
}
