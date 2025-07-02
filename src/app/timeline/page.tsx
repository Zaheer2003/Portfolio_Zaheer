'use client'

import React, { JSX, useState } from 'react'
import { Briefcase, BookOpen, Code2 } from 'lucide-react'

type TimelineCategory = 'All Events' | 'Education' | 'Internship' | 'Freelancer'

const filters: TimelineCategory[] = ['All Events', 'Education', 'Internship', 'Freelancer']

const timelineData = [
  {
    year: '2026',
    title: 'Graduation',
    description: 'Pursuing B.Tech in Computer Science and Engineering at Kingston University',
    type: 'Education',
  },
  {
    year: '2022',
    title: '12th Grade',
    description: 'Completed 12th grade with a focus on Science and Mathematics',
    type: 'Education',
  },
  {
    year: '2020',
    title: '10th Grade',
    description: 'Completed 10th grade from I.H.S School Kerala',
    type: 'Education',
  },
  {
    year: '2024',
    title: 'Freelance Web Developer',
    description: 'Built e-commerce and business websites for small clients using Laravel and Next.js',
    type: 'Freelancer',
  },
  {
    year: '2023',
    title: 'Software Engineering Intern',
    description: 'Interned at Nexa Tech, worked on ERP and POS system development using React and Laravel',
    type: 'Internship',
  },
]

export default function TimelinePage() {
  const [activeTab, setActiveTab] = useState<TimelineCategory>('All Events')

  const filteredTimeline =
    activeTab === 'All Events'
      ? timelineData
      : timelineData.filter((item) => item.type === activeTab)

  const iconMap: Record<TimelineCategory, JSX.Element | null> = {
    'All Events': null,
    Education: <BookOpen className="w-4 h-4" />,
    Internship: <Briefcase className="w-4 h-4" />,
    Freelancer: <Code2 className="w-4 h-4" />,
  }

  return (
    <section className="min-h-screen px-4 py-16 md:px-8 bg-[#01003D] text-white font-audiowide mt-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">My Timeline</h2>
          <p className="text-white/70">
            Follow my journey through education, internships, and projects
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-1 rounded-full border transition flex items-center gap-2 text-sm ${
                activeTab === category
                  ? 'bg-white text-[#01003D]'
                  : 'border-white/30 text-white/60 hover:text-white'
              }`}
            >
              {iconMap[category]}
              {category}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative border-l border-white/20 pl-6 space-y-10">
          {filteredTimeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[11px] top-1 w-4 h-4 bg-white rounded-full"></span>

              {/* Card */}
              <div className="bg-[#0D0D2B] p-6 md:p-8 rounded-xl border border-white/10 space-y-2">
                <p className="text-sm text-white/50">{item.year}</p>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
