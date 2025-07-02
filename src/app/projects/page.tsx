'use client'

import { CalendarDays, BookOpen, MessageCircle } from 'lucide-react'
import React from 'react'

const projects = [
  {
    title: 'Retail Management System',
    category: 'Web App',
    description:
      'A scalable platform for organizing and managing events with real-time booking.',
    icon: <CalendarDays size={40} />,
    tags: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwindcss', 'Postman', 'Shadcn UI', '+5'],
    color: 'bg-cyan-500',
  },
  {
    title: 'RIT Nexus',
    category: 'Blog Platform',
    description:
      'A community-driven blog platform for RIT students to share ideas, experiences, and updates.',
    icon: <BookOpen size={40} />,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', '+2'],
    color: 'bg-yellow-500',
  },
  {
    title: 'Vyapari AI',
    category: 'AI/Automation',
    description:
      'AI-powered business assistant to automate customer queries and streamline retail communication.',
    icon: <MessageCircle size={40} />,
    tags: ['Python', 'FastAPI', 'Ollama Mistral 7B', 'SQLite', '+1'],
    color: 'bg-green-500',
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-16 bg-[#0A0A23] text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-white/70 mt-2">
            Explore my portfolio of innovative projects across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 text-center text-black shadow-lg ${project.color}`}
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)',
              }}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-center mb-4">
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  + Featured
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center items-center mb-4 text-white">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              {/* Description */}
              <p className="text-white/90 mt-2 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (static for now) */}
        <div className="flex justify-center mt-10 gap-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? 'bg-white' : 'bg-white/30'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}
