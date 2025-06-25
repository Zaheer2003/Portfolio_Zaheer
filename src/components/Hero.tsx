'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowDownToLine, Mail } from 'lucide-react'
import Typewriter from 'typewriter-effect'


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#01003D] to-[#000033] text-white font-audiowide px-4 overflow-hidden">

      {/* Background Grid Box Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]"></div>

      {/* Decorative Blur */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl space-y-6 z-10">

        {/* Name Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Mohamed Zaheer
        </h1>

        {/* Animated Role Subtitle */}
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

        {/* Short Bio */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed mt-2">
          A passionate Full-Stack Developer dedicated to building modern, responsive,<br /> and innovative web solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a href="/MyCV.pdf" download>
            <Button
              variant="default"
              className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Download CV <ArrowDownToLine className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <Link href="#contact">
            <Button
              variant="default"
              className="border-white text-white hover:bg-white hover:text-[#01003D] transition-all duration-300"
            >
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Display "use client" Large */}
        <div className="mt-12">
          <p className="text-3xl md:text-5xl font-bold text-white/20 uppercase tracking-wider">
            use client
          </p>
        </div>
      </div>
    </section>
  )
}
