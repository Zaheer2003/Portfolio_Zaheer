'use client'

import React from 'react'
import { Code2, ShoppingBag, MonitorSmartphone, Database } from 'lucide-react'

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-white" />,
    title: 'Web Application Development',
    description: 'Build scalable, responsive full-stack web apps using Next.js, Laravel, and Tailwind CSS.',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    title: 'E-commerce Solutions',
    description: 'Launch online stores with integrated payment systems, admin dashboards, and product management.',
    gradient: 'from-green-400 via-teal-400 to-cyan-500',
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-white" />,
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces and mobile-first layouts using Figma and modern frontend frameworks.',
    gradient: 'from-yellow-400 via-red-400 to-pink-500',
  },
  {
    icon: <Database className="w-7 h-7 text-white" />,
    title: 'POS & Retail Systems',
    description: 'Retail & inventory solutions for small businesses, including barcode, invoice, and sales tracking features.',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-12 bg-[#01003D] text-white font-audiowide">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
              Services
            </span>
          </h2>
          <p className="text-white/75 text-lg sm:text-xl">
            Discover the digital solutions we provide for businesses and startups
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className="bg-[#0D0D2B] border border-white/10 rounded-2xl p-8 flex flex-col gap-6
                         shadow-lg shadow-black/30
                         transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr ${gradient} shadow-lg`}
              >
                {icon}
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-white/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
