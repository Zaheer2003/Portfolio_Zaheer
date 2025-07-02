'use client'

import React from 'react'
import { Code2, ShoppingBag, MonitorSmartphone, Database } from 'lucide-react'

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: 'Web Application Development',
    description: 'Build scalable, responsive full-stack web apps using Next.js, Laravel, and Tailwind CSS.',
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    title: 'E-commerce Solutions',
    description: 'Launch online stores with integrated payment systems, admin dashboards, and product management.',
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces and mobile-first layouts using Figma and modern frontend frameworks.',
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: 'POS & Retail Systems',
    description: 'Retail & inventory solutions for small businesses, including barcode, invoice, and sales tracking features.',
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-4 py-16 md:px-8 bg-[#01003D] text-white font-audiowide">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Discover the digital solutions we provide for businesses and startups
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0D0D2B] rounded-xl border border-white/10 p-6 flex flex-col gap-4 transition hover:scale-[1.02]"
            >
              <div className="bg-white/10 p-3 w-fit rounded-lg">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
