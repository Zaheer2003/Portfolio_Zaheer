'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import {
  Briefcase,
  LayoutDashboard,
  FileText,
  Library,
  Globe,
  Layers,
} from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Retail Management System',
    category: 'Full Stack Web App',
    description:
      'A POS-integrated system for Ruby Hardware with client, purchase, and inventory modules.',
    timeline: 'Mar 2025 - Present',
    icon: <Briefcase size={56} />,
    color: 'bg-cyan-500',
    url: '/projects/retail-management',
  },
  {
    title: 'Travel Agency Admin Dashboard',
    category: 'Dashboard / Web App',
    description:
      'Admin dashboard with Gemini AI for itinerary planning, trip and user management.',
    timeline: 'Mar 2025 - Present',
    icon: <LayoutDashboard size={56} />,
    color: 'bg-yellow-500',
    url: '/projects/travel-agency-dashboard',
  },
  {
    title: 'Auto Cars - Taxi System UI',
    category: 'UI/UX Design',
    description:
      'UI prototype for a taxi reservation system with booking and driver assignment.',
    timeline: 'Feb 2024 - Apr 2024',
    icon: <FileText size={56} />,
    color: 'bg-green-500',
    url: '/projects/auto-cars-ui',
  },
  {
    title: 'University Library Management System',
    category: 'Full Stack Web App',
    description:
      'Library system with role-based control, notifications, Redis and PostgreSQL.',
    timeline: 'May 2025 - Present',
    icon: <Library size={56} />,
    color: 'bg-purple-600',
    url: '/projects/library-management',
  },
  {
    title: '3D Developer Portfolio',
    category: 'Portfolio Website',
    description:
      '3D animated portfolio using React, Three.js, and interactive transitions.',
    timeline: 'May 2025 - May 2025',
    icon: <Globe size={56} />,
    color: 'bg-pink-500',
    url: '/projects/3d-portfolio',
  },
  {
    title: 'Payroll System - Grifindo Toys',
    category: 'Desktop App',
    description:
      'Payroll app using C# and MySQL for automating salary and employee records.',
    timeline: 'N/A',
    icon: <Layers size={56} />,
    color: 'bg-orange-500',
    url: '/projects/payroll-system',
  },
]

export default function Projects() {
  const router = useRouter()

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 bg-[#01003D] text-white font-audiowide mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight">Projects</h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto text-lg">
            Explore my portfolio of innovative projects across various domains.
          </p>
        </div>

        {/* Responsive Grid & Mobile Carousel */}
        <div className="md:grid md:grid-cols-3 gap-10 hidden md:block">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push(project.url)}
              className={`rounded-2xl p-8 text-black shadow-xl transform transition-transform hover:scale-[1.03] focus:scale-[1.03] focus:outline-none ${project.color} flex flex-col justify-between`}
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)',
                minHeight: '420px',
              }}
              type="button"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white/25 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                  <span className="bg-white/25 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    + Featured
                  </span>
                </div>
                <div className="flex justify-center items-center mb-6 text-white">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-xs italic mb-4">{project.timeline}</p>
                <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <span
                  className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-white/40 transition"
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(project.url)
                  }}
                >
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 -mx-1">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push(project.url)}
              className={`min-w-[85%] snap-center rounded-2xl p-6 text-black shadow-xl transform transition-transform hover:scale-[1.03] focus:scale-[1.03] focus:outline-none ${project.color} flex flex-col justify-between`}
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)',
              }}
              type="button"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white/25 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                  <span className="bg-white/25 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    + Featured
                  </span>
                </div>
                <div className="flex justify-center items-center mb-4 text-white">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white/80 text-xs italic mb-3">{project.timeline}</p>
                <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span
                  className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-white/40 transition"
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(project.url)
                  }}
                >
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
