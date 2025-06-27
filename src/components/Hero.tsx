'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowDownToLine, Mail, Lightbulb, Layers, Code2, PenTool } from 'lucide-react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import IronmanHeartSpinner from "./IronSpinner"

export default function Hero() {
  return (
    
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#01003D] to-[#000033] text-white font-audiowide px-4 overflow-hidden">
      <IronmanHeartSpinner />
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]"></div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 flex-grow">

        {/* Left Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col gap-6 py-12"
        >
        {[
           { icon: <Layers className="text-purple-400 w-8 h-8" />, label: 'Solutions', y: 0 },
          { icon: <Lightbulb className="text-yellow-400 w-8 h-8" />, label: 'Innovation', y: 20 },
].map((card, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: card.y + 40 }}
    whileInView={{ opacity: 1, y: card.y }}
    whileHover={{
      scale: 1.05,
      rotateX: -5,
      rotateY: 5,
      boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15)',
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.3 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-2 transition-all h-[130px]"
  >
    {card.icon}
    <span className="text-white text-lg font-semibold">{card.label}</span>
  </motion.div>
))}

        </motion.div>

        {/* Center Hero */}
        <div className="text-center max-w-3xl space-y-6 px-4">
          <p className="text-md md:text-lg italic text-yellow-400 tracking-wide">
            || Design with purpose. Develop with passion. ||
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Mohamed Zaheer
          </h1>

          <div className="text-lg md:text-2xl font-medium text-white/90 flex justify-center gap-2 h-10">
            <span className="text-gray-400">Im a</span>
            <Typewriter
              options={{
                strings: [
                  'Software Engineer',
                  'Full Stack Developer',
                  'UI/UX Designer',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-2">
            Bridging creativity and code to build modern, intelligent, and user-centric web experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <a href="/MyCV.pdf" download className="cursor-pointer">
              <Button
                variant="default"
                className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
              >
                Download CV <ArrowDownToLine className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="#contact" className="cursor-pointer">
              <Button
                variant="default"
                className="border border-white text-white hover:bg-white hover:text-[#01003D] transition-all duration-300 cursor-pointer"
              >
                Contact Me <Mail className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col gap-6 py-12"
        >
          {[ 
            { icon: <Code2 className="text-green-400 w-8 h-8" />, label: 'Development', y: 0 },
            { icon: <PenTool className="text-blue-400 w-8 h-8" />, label: 'Design', y: 20 },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: card.y + 40 }}
              whileInView={{ opacity: 1, y: card.y }}
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.3 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-2 transition-all"
            >
              {card.icon}
              <span className="text-white text-lg font-semibold">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
