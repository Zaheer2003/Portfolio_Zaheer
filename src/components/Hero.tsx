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
          { src: '/html.svg', style: 'top-[10%] left-[15%]', alt: 'HTML5 Logo', animationDelay: '0s' },
          { src: '/css.svg', style: 'top-[25%] left-[70%]', alt: 'CSS3 Logo', animationDelay: '0.2s' },
          { src: '/javascript.svg', style: 'bottom-[20%] right-[20%]', alt: 'JavaScript Logo', animationDelay: '0.4s' },
          { src: '/react.svg', style: 'bottom-[10%] left-[10%]', alt: 'React Logo', animationDelay: '0.6s' },
          { src: '/nextjs.svg', style: 'top-[40%] right-[10%]', alt: 'Next.js Logo', animationDelay: '0.8s' },
          { src: '/laravel.svg', style: 'bottom-[30%] left-[40%]', alt: 'Laravel Logo', animationDelay: '1s' },
          { src: '/Postgre.png', style: 'top-[15%] right-[30%]', alt: 'PostgreSQL Logo', animationDelay: '1.2s' },
          { src: '/vercel.svg', style: 'bottom-[5%] right-[5%]', alt: 'Vercel Logo', animationDelay: '1.4s' },
          { src: '/tailwindcss.svg', style: 'top-[5%] left-[5%]', alt: 'Tailwind CSS Logo', animationDelay: '1.6s' },
          { src: '/typescript.svg', style: 'top-[45%] left-[55%]', alt: 'TypeScript Logo', animationDelay: '1.8s' },
        ].map((icon, i) => (
          <div
            key={i}
            className={`absolute ${icon.style} w-10 h-10 opacity-20 animate-floating`}
            style={{ animationDelay: icon.animationDelay }}
            aria-label={icon.alt}
            role="img"
          >
            <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Profile Image with Glow */}
      <div className="relative flex justify-center z-10">
        <div className="absolute rounded-full w-[280px] h-[280px] bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-30 animate-pulse"></div>
        <Image
          src="/my-pic.jpg"
          alt="Mohamed Zaheer"
          width={220}
          height={220}
          className="relative rounded-full border-4 border-white shadow-xl"
        />
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl space-y-8 z-10 animate-fadeInUp">
        {/* Name Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Mohamed Zaheer
        </h1>

        {/* Short Bio */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
          A passionate Full-Stack Developer dedicated to building modern, responsive,<br /> and innovative web solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a href="/MyCV.pdf" download>
            <Button
              variant="default"
              className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 px-6 py-3 cursor-pointer"
            >
              Download CV <ArrowDownToLine className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link href="#contact">
            <Button
              variant="default"
              className="border-white text-white hover:bg-white hover:text-[#01003D] shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-300 px-6 py-3 cursor-pointer"
            >
              Contact Me <Mail className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDownToLine className="w-8 h-8 text-white/70" />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
