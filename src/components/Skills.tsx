'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Code2, Server, Languages, Check } from 'lucide-react'

export default function Skills() {
  const skillRef = useRef<HTMLDivElement>(null)

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 className="w-6 h-6 text-blue-400" aria-hidden="true" />,
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Server className="w-6 h-6 text-green-400" aria-hidden="true" />,
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js']
    },
    {
      category: 'Languages',
      icon: <Languages className="w-6 h-6 text-pink-400" aria-hidden="true" />,
      items: ['English', 'Tamil', 'Sinhala']
    }
  ]

  useEffect(() => {
    if (skillRef.current) {
      const cards = skillRef.current.querySelectorAll('.skill-card')
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.25,
        ease: 'power3.out',
        delay: 0.3
      })
    }
  }, [])

  return (
    <section
      className="bg-[#0B0B3B] text-white font-audiowide py-20 px-6 md:px-12 min-h-screen"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h1 id="skills-heading" className="text-center text-4xl md:text-6xl font-bold mb-6">
          Skills
        </h1>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-14 text-lg md:text-xl">
          A curated selection of my core competencies across programming languages, frameworks, and spoken languages, demonstrating my technical expertise and communication abilities.
        </p>

        <div
          ref={skillRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          role="list"
          aria-label="List of skills categories"
        >
          {skills.map((skill, idx) => (
            <article
              key={idx}
              className="skill-card bg-[#131356] p-8 rounded-xl shadow-md hover:shadow-blue-500/40 transition-shadow transform hover:scale-[1.03] focus-within:scale-[1.03] focus-within:shadow-blue-500/40"
              role="listitem"
              tabIndex={0}
              aria-labelledby={`skill-category-${idx}`}
            >
              <div className="flex items-center gap-4 mb-6">
                {skill.icon}
                <h2
                  id={`skill-category-${idx}`}
                  className="text-xl md:text-2xl text-blue-300 font-semibold"
                >
                  {skill.category}
                </h2>
              </div>
              <ul className="list-none text-white/70 text-base space-y-3 pl-1">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 leading-relaxed">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
