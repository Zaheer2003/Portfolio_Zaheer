'use client'

import { useRouter } from 'next/navigation'
import { CalendarDays, BookOpen, MessageCircle } from 'lucide-react'
import React from 'react'

const projects = [
  {
    title: 'Retail Management System',
    category: 'Web App',
    description:
      'A scalable platform for organizing and managing events with real-time booking.',
    icon: <CalendarDays size={56} />,
    tags: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwindcss', 'Postman', 'Shadcn UI', '+5'],
    color: 'bg-cyan-500',
    url: '/projects/retail-management',
  },
  {
    title: 'RIT Nexus',
    category: 'Blog Platform',
    description:
      'A community-driven blog platform for RIT students to share ideas, experiences, and updates.',
    icon: <BookOpen size={56} />,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', '+2'],
    color: 'bg-yellow-500',
    url: '/projects/rit-nexus',
  },
  {
    title: 'Vyapari AI',
    category: 'AI/Automation',
    description:
      'AI-powered business assistant to automate customer queries and streamline retail communication.',
    icon: <MessageCircle size={56} />,
    tags: ['Python', 'FastAPI', 'Ollama Mistral 7B', 'SQLite', '+1'],
    color: 'bg-green-500',
    url: '/projects/vyapari-ai',
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

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => router.push(project.url)}
              className={`rounded-2xl p-10 text-black shadow-xl transform transition-transform hover:scale-[1.03] focus:scale-[1.03] focus:outline-none ${project.color}`}
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)',
              }}
              aria-label={`Open project details: ${project.title}`}
              type="button"
            >
              {/* Category and Featured badges */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-white/25 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  {project.category}
                </span>
                <span className="bg-white/25 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  + Featured
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center items-center mb-6 text-white">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-white/90 text-base leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/15 text-white text-sm px-4 py-2 rounded-full font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Pagination Dots (static for now) */}
        <div className="flex justify-center mt-16 gap-3">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === 0 ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
