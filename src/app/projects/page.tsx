'use client'

import React from 'react'
import Link from 'next/link'
import { FaProjectDiagram } from 'react-icons/fa'  // Example icon

type Project = {
  id: string
  title: string
  description: string
  language: string
  tools: string
  githubUrl?: string
  liveUrl?: string
  cardColor: string         // Background color for card
  logoBgColor: string       // Background color for logo box
  logoColor: string         // Icon color
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'Description of project one goes here.',
    language: 'JavaScript',
    tools: 'React, Tailwind CSS',
    githubUrl: 'https://github.com/Zaheer2003/project-one',
    liveUrl: 'https://projectone.example.com',
    cardColor: '#fef3c7',     // light yellow
    logoBgColor: '#fde68a',   // yellow-300
    logoColor: '#92400e',     // yellow-800
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Description of project two goes here.',
    language: 'Python',
    tools: 'Django, PostgreSQL',
    githubUrl: 'https://github.com/Zaheer2003/project-two',
    cardColor: '#dbeafe',     // light blue
    logoBgColor: '#bfdbfe',   // blue-300
    logoColor: '#1e40af',     // blue-800
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Another project description.',
    language: 'Java',
    tools: 'Spring, MySQL',
    cardColor: '#ecfdf5',     // light green
    logoBgColor: '#86efac',   // green-400
    logoColor: '#166534',     // green-800
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#01003D] text-[#01003D] font-audiowide py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(
            ({
              id,
              title,
              description,
              language,
              tools,
              githubUrl,
              liveUrl,
              cardColor,
              logoBgColor,
              logoColor,
            }) => (
              <Link
                key={id}
                href={liveUrl ?? githubUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: cardColor }}
                className="block rounded-2xl border-4 border-[#1e1e1e] p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Logo / Icon Box */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 select-none"
                  style={{ backgroundColor: logoBgColor }}
                >
                  <FaProjectDiagram size={24} color={logoColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                {/* Description */}
                <p className="text-sm mb-4">{description}</p>

                {/* Language and Tools Info */}
                <div className="flex gap-4 text-xs font-medium">
                  <div className="flex-1 rounded-md py-1 text-center" style={{ backgroundColor: logoBgColor, color: logoColor }}>
                    Language
                    <div className="mt-1">{language}</div>
                  </div>
                  <div className="flex-1 rounded-md py-1 text-center" style={{ backgroundColor: logoBgColor, color: logoColor }}>
                    Tools
                    <div className="mt-1">{tools}</div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
