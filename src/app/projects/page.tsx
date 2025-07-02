'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CalendarDays, BookOpen, MessageCircle } from 'lucide-react'

const projects = [
  {
    title: 'Retail Management System',
    category: 'Full Stack Web App',
    description: `Currently developing a full stack retail management system for ruby hardware with integrated POS and as an individual academic project.
Tech stack includes Next.js, TailwindCss, Shadcn UI, Laravel and PostgreSQL, API endpoints tested using Postman.
Key Features: Client Management, Purchase Management, Inventory Tracking etc.`,
    timeline: 'Mar 2025 - Present',
    icon: <CalendarDays size={56} />,
    color: 'bg-cyan-500',
    url: '/projects/retail-management',
  },
  {
    title: 'Travel Agency Admin Dashboard',
    category: 'Dashboard / Web App',
    description: `Developed a responsive dashboard, using React 19, Syncfusion, TailwindCss and Vite.
Integrated Gemini AI for itinerary generation, user & trip management and data visualizations via Syncfusion.
Backend powered Appwrite.`,
    timeline: 'Mar 2025 - Present',
    icon: <BookOpen size={56} />,
    color: 'bg-yellow-500',
    url: '/projects/travel-agency-dashboard',
  },
  {
    title: 'Auto Cars - Web based System UI',
    category: 'UI/UX Design',
    description: `Designed UI in Figma for a taxi reservation system with user registration, booking and driver assignment.
Enhanced UI/UX design skills in a System Analysis & Design assignment.`,
    timeline: 'Feb 2024 - Apr 2024',
    icon: <MessageCircle size={56} />,
    color: 'bg-green-500',
    url: '/projects/auto-cars-ui',
  },
  {
    title: 'University Library Management System',
    category: 'Full Stack Web App',
    description: `Develop a scalable library system with Next.js, TypeScript, PostgreSQL, Redis, and Auth.js.
Includes: Admin dashboard, book management, automated notifications (Upstash Workflows & Resend) and role-based access control.`,
    timeline: 'May 2025 - Present',
    icon: <CalendarDays size={56} />,
    color: 'bg-purple-600',
    url: '/projects/library-management',
  },
  {
    title: '3D Developer Portfolio',
    category: 'Portfolio Website',
    description: `Developed a responsive 3D portfolio using React and Three.js, featuring interactive models, animations and transitions to showcase development skills.`,
    timeline: 'May 2025 - May 2025',
    icon: <BookOpen size={56} />,
    color: 'bg-pink-500',
    url: '/projects/3d-portfolio',
  },
  {
    title: 'Payroll System for Grifindo Toys',
    category: 'Desktop App',
    description: `Developed a payroll system using C# and MySQL for Grifindo Toys, a UK-based toy manufacturing company, as part of HND 1st Semester Programming Assignment.
The system automates salary calculation and handles essential payroll operations, including management of employees records, allowances, deductions, etc.`,
    timeline: 'N/A',
    icon: <MessageCircle size={56} />,
    color: 'bg-orange-500',
    url: '/projects/payroll-system',
  },
]

const ITEMS_PER_PAGE = 3

export default function Projects() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)

  // Calculate visible projects
  const startIndex = currentPage * ITEMS_PER_PAGE
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 bg-[#01003D] text-white font-audiowide mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight">Projects</h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto text-lg">
            Explore my portfolio of innovative projects across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {visibleProjects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => router.push(project.url)}
              className={`rounded-2xl p-8 text-black shadow-xl transform transition-transform hover:scale-[1.03] focus:scale-[1.03] focus:outline-none ${project.color} flex flex-col justify-between`}
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)',
                minHeight: '420px',
              }}
              aria-label={`Open project details: ${project.title}`}
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

                <p className="text-white/90 text-sm whitespace-pre-line leading-relaxed">
                  {project.description}
                </p>
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
            </button>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-16 gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              className={`w-4 h-4 rounded-full transition-colors focus:outline-none ${
                i === currentPage ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
