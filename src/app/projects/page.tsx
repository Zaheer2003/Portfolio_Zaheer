'use client'

import React from 'react'
import Link from 'next/link'
import { FaProjectDiagram } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'

type Project = {
  id: string
  title: string
  description: string
  language: string
  tools: string
  githubUrl?: string
  liveUrl?: string
  cardColor: string
  logoBgColor: string
  logoColor: string
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
    cardColor: '#fef3c7',
    logoBgColor: '#fde68a',
    logoColor: '#92400e',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Description of project two goes here.',
    language: 'Python',
    tools: 'Django, PostgreSQL',
    githubUrl: 'https://github.com/Zaheer2003/project-two',
    cardColor: '#dbeafe',
    logoBgColor: '#bfdbfe',
    logoColor: '#1e40af',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Another project description.',
    language: 'Java',
    tools: 'Spring, MySQL',
    cardColor: '#ecfdf5',
    logoBgColor: '#86efac',
    logoColor: '#166534',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100 },
  }),
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#01003D] text-[#01003D] font-audiowide py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Projects</h2>

        <div className="flex flex-col gap-8">
          {projects.map(
            (
              {
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
              },
              index
            ) => (
              <motion.div
                key={id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Link
                  href={liveUrl ?? githubUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: cardColor }}
                  className="flex items-center rounded-2xl border-4 border-[#1e1e1e] p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  {/* Logo / Icon Box */}
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 mr-6 select-none"
                    style={{ backgroundColor: logoBgColor }}
                  >
                    <FaProjectDiagram size={32} color={logoColor} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm mb-4 max-w-lg">{description}</p>

                    <div className="flex gap-4 text-xs font-medium max-w-lg">
                      <div
                        className="flex-1 rounded-md py-1 text-center"
                        style={{ backgroundColor: logoBgColor, color: logoColor }}
                      >
                        Language
                        <div className="mt-1">{language}</div>
                      </div>
                      <div
                        className="flex-1 rounded-md py-1 text-center"
                        style={{ backgroundColor: logoBgColor, color: logoColor }}
                      >
                        Tools
                        <div className="mt-1">{tools}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
