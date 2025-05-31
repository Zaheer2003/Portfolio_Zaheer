'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive Java-based system for bus ticket booking, cancellations, and seat management.',
      techStack: ['Java', 'MySQL', 'Swing'],
      image: '/projects/bus-reservation.png',
      github: 'https://github.com/yourusername/bus-reservation-system',
      demo: ''
    },
    {
      title: '3D Portfolio',
      description: 'An interactive 3D portfolio showcasing projects and skills.',
      techStack: ['Three.js', 'React', 'CSS'],
      image: '/projects/3d-portfolio.png',
      github: 'https://github.com/yourusername/3d-portfolio',
      demo: ''
    },
    {
      title: 'Retail Management System',
      description: 'An efficient system to manage retail sales, inventory, and customers.',
      techStack: ['Java', 'MySQL', 'Swing'],
      image: '/projects/retail-management.png',
      github: 'https://github.com/yourusername/retail-management',
      demo: ''
    },
    {
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform with product listings and payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      image: '/projects/ecommerce-website.png',
      github: 'https://github.com/yourusername/ecommerce-website',
      demo: ''
    },
    {
      title: 'Bus Reservation System',
      description: 'A comprehensive Java-based system for bus ticket booking, cancellations, and seat management.',
      techStack: ['Java', 'MySQL', 'Swing'],
      image: '/projects/bus-reservation.png',
      github: 'https://github.com/yourusername/bus-reservation-system',
      demo: ''
    },
    {
      title: 'Payroll Management System',
      description: 'Web-based payroll system built for small businesses with employee management and salary calculation.',
      techStack: ['ASP.NET', 'C#', 'SQL Server'],
      image: '/projects/payroll-system.png',
      github: 'https://github.com/yourusername/payroll-management',
      demo: ''
    },
    {
      title: 'E-commerce Website for Hardware Shop',
      description: 'A user-friendly e-commerce platform for wholesalers and retailers to purchase hardware products online.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/projects/ruby-ecommerce.png',
      github: 'https://github.com/yourusername/ruby-ecommerce',
      demo: 'https://ruby-ecommerce.example.com'
    }
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return

    const container = containerRef.current
    const section = sectionRef.current

    const totalScrollWidth = container.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollDistance = totalScrollWidth - viewportWidth

    const animation = gsap.to(container, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#01003D] text-white font-audiowide py-20 px-6 md:px-12 overflow-hidden h-screen overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">Projects</h2>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="flex space-x-12"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A45] p-6 rounded-lg shadow-md hover:shadow-blue-500/30 transition-shadow flex flex-col min-w-[320px] max-w-[320px]"
            >
              {project.image && (
                <div className="mb-4 relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              )}
              <h3 className="text-xl md:text-2xl text-blue-300 font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-white/90 font-semibold mb-1">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 text-sm text-blue-400">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="bg-blue-800 px-3 py-1 rounded">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#01003D]">
                      <Github className="w-5 h-5" /> GitHub
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#01003D]">
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
