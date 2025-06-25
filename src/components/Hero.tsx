'use client'

import Link from 'next/link'
import {
  Button
} from './ui/button'
import {
  ArrowDownToLine,
  Mail,
  Lightbulb,
  Layers,
  Code2,
  PenTool
} from 'lucide-react'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#01003D] to-[#000033] text-white font-audiowide px-4 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]"></div>

      {/* Optional Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden z-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0.00,49.98 C150.00,150.00 349.73,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#000033" opacity="0.2">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="
              M0.00,49.98 C150.00,150.00 349.73,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z;
              M0.00,69.98 C200.00,130.00 300.00,-30.00 500.00,69.98 L500.00,150.00 L0.00,150.00 Z;
              M0.00,49.98 C150.00,150.00 349.73,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Hero Content with Cards on Sides */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">

        {/* Left Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-black/30 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-default">
            <Layers className="text-purple-400 w-8 h-8 mb-2" />
            <span className="text-white/90">Solutions</span>
          </div>
          <div className="bg-black/30 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-default">
            <Lightbulb className="text-purple-400 w-8 h-8 mb-2" />
            <span className="text-white/90">Innovation</span>
          </div>
        </div>

        {/* Center Hero Text */}
        <div className="text-center max-w-3xl space-y-6 px-4">
          {/* Motivational Quote */}
          <p className="text-md md:text-lg italic text-yellow-400 tracking-wide">
            || Design with purpose. Develop with passion. ||
          </p>

          {/* Name Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Mohamed Zaheer
          </h1>

          {/* Typewriter Subtitle */}
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
            Bridging creativity and code to build modern, intelligent, and user-centric web experiences.
          </p>

          {/* Buttons */}
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
                className="border-white text-white hover:bg-white hover:text-[#01003D] transition-all duration-300 cursor-pointer"
              >
                Contact Me <Mail className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-black/30 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-default">
            <Code2 className="text-purple-400 w-8 h-8 mb-2" />
            <span className="text-white/90">Development</span>
          </div>
          <div className="bg-black/30 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-default">
            <PenTool className="text-blue-400 w-8 h-8 mb-2" />
            <span className="text-white/90">Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}
