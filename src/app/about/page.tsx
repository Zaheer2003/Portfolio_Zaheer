'use client'

import React, { useState } from 'react'
import { Github, Linkedin, Instagram, Mail, ArrowDownToLine } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button' // adjust the path if needed

type SkillCategory = 'Languages' | 'Frameworks' | 'Domains' | 'Tools'

const skills: Record<SkillCategory, string[]> = {
  Languages: ['Java', 'Python', 'JavaScript/TypeScript', 'C/C++', 'Rust'],
  Frameworks: ['React', 'Next.js', 'Laravel', 'Tailwind CSS'],
  Domains: ['Web Development', 'AI/ML', 'UI/UX', 'Cloud'],
  Tools: ['Git', 'Postman', 'Figma', 'VS Code']
}

export default function About() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Languages')

  const formatLabel = (tab: SkillCategory) =>
    tab === 'Domains' ? 'Domain' : tab.slice(0, -1)

  return (
    <section className="min-h-screen px-4 py-16 md:px-8 bg-[#01003D] text-white font-audiowide">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-white/70">
            Get to know me, my skills, and my journey in the world of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Who I Am */}
          <div className="bg-[#0D0D2B] p-6 md:p-8 rounded-xl border border-white/10 space-y-5">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-white/60 text-sm">A brief introduction</p>
            <p className="text-white/80 leading-relaxed text-base">
              Im a final-year Software Engineering student with a passion for building intelligent systems
              that solve real-world problems. My journey in tech has taken me from classroom theory to
              hands-on projects in AI, e-commerce, and user-focused software.
            </p>
            <p className="text-white/70 text-sm">
              I thrive at the intersection of creativity and problem-solving, with a goal of crafting modern digital
              solutions that are scalable, accessible, and intuitive.
            </p>

            {/* Download CV Button */}
            <div className="pt-2">
              <a href="/MyCV.pdf" download>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Download CV <ArrowDownToLine className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <Link href="https://github.com/Zaheer2003" target="_blank"><Github className="hover:text-blue-400" /></Link>
              <Link href="https://www.linkedin.com/in/mohamed-zaheer-335292246/" target="_blank"><Linkedin className="hover:text-blue-400" /></Link>
              <Link href="mailto:mhdzaheer2003@gmail.com" target="_blank"><Mail className="hover:text-blue-400" /></Link>
              <Link href="https://www.instagram.com/_zaheer_mhd_/" target="_blank"><Instagram className="hover:text-blue-400" /></Link>
            </div>
          </div>

          {/* Right - Skills & Expertise */}
          <div className="bg-[#0D0D2B] p-6 md:p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
            <p className="text-white/60 text-sm mb-4">What I bring to the table</p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(skills) as SkillCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-1 rounded-md text-sm border transition ${
                    activeTab === category
                      ? 'bg-white text-[#01003D]'
                      : 'border-white/20 text-white/60 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills List */}
            <ul className="space-y-3">
              {skills[activeTab].map((skill, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-md border border-white/10"
                >
                  <span>{skill}</span>
                  <span className="text-xs bg-white text-[#01003D] px-2 py-0.5 rounded-md capitalize">
                    {formatLabel(activeTab)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
