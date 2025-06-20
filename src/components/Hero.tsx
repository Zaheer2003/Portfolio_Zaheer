'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowDownToLine, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#01003D] to-[#000033] text-white font-audiowide px-4 overflow-hidden">

      {/* Animated Tech Stack Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[
          { src: '/html.svg', style: 'top-[10%] left-[15%]' },
          { src: '/css.svg', style: 'top-[25%] left-[70%]' },
          { src: '/javascript.svg', style: 'bottom-[20%] right-[20%]' },
          { src: '/react.svg', style: 'bottom-[10%] left-[10%]' },
          { src: '/nextjs.svg', style: 'top-[40%] right-[10%]' },
          { src: '/laravel.svg', style: 'bottom-[30%] left-[40%]' },
          { src: '/Postgre.png', style: 'top-[15%] right-[30%]' },
          { src: '/vercel.svg', style: 'bottom-[5%] right-[5%]' },
          { src: '/tailwindcss.svg', style: 'top-[5%] left-[5%]' },
          { src: '/typescript.svg', style: 'top-[45%] left-[55%]' },
        ].map((icon, i) => (
          <div
            key={i}
            className={`absolute ${icon.style} w-10 h-10 opacity-10 animate-floating`}
          >
            <Image src={icon.src} alt="Tech Icon" fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl space-y-8 z-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/my-pic.jpg"
            alt="Mohamed Zaheer"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-xl"
          />
        </div>

        {/* Name Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Mohamed Zaheer
        </h1>

        {/* Short Bio */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
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
      </div>
    </section>
  )
}
