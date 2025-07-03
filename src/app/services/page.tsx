'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
  Code2,
  ShoppingBag,
  MonitorSmartphone,
  Database,
  Briefcase,
  ExternalLink,
} from 'lucide-react'

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-white" />,
    title: 'Web Application Development',
    description:
      'Build scalable, responsive full-stack web apps using Next.js, Laravel, and Tailwind CSS.',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    path: '/services/web-development',
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    title: 'E-commerce Solutions',
    description:
      'Launch online stores with integrated payment systems, admin dashboards, and product management.',
    gradient: 'from-green-400 via-teal-400 to-cyan-500',
    path: '/services/ecommerce',
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-white" />,
    title: 'UI/UX Design',
    description:
      'Design user-friendly interfaces and mobile-first layouts using Figma and modern frontend frameworks.',
    gradient: 'from-yellow-400 via-red-400 to-pink-500',
    path: '/services/ui-ux-design',
  },
  {
    icon: <Database className="w-7 h-7 text-white" />,
    title: 'POS & Retail Systems',
    description:
      'Retail & inventory solutions for small businesses, including barcode, invoice, and sales tracking features.',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    path: '/services/pos-retail',
  },
]

const platforms = [
  {
    icon: <Briefcase className="w-7 h-7 text-white" />,
    title: 'Hire on Fiverr',
    description: 'View our Fiverr profile and request a custom project today.',
    gradient: 'from-green-400 to-green-600',
    url: 'https://www.fiverr.com/yourusername',
  },
  {
    icon: <ExternalLink className="w-7 h-7 text-white" />,
    title: 'Hire on Upwork',
    description: 'Connect with us on Upwork for freelance and long-term projects.',
    gradient: 'from-blue-400 to-blue-600',
    url: 'https://www.upwork.com/freelancers/~yourprofileid',
  },
]

function ServiceCard({
  icon,
  title,
  description,
  gradient,
  path,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  path: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(path)}
      className="bg-[#0D0D2B] border border-white/10 rounded-2xl p-8 flex flex-col gap-6
                 shadow-lg shadow-black/30 cursor-pointer transform transition duration-300
                 hover:scale-105 hover:bg-white/10 active:scale-95 focus:ring-4 focus:ring-indigo-500/50
                 motion-safe:animate-fadeInUp"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr ${gradient} shadow-lg shadow-black/50`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </button>
  )
}

function ExternalCard({
  icon,
  title,
  description,
  gradient,
  url,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  url: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0D0D2B] border border-white/10 rounded-2xl p-8 flex flex-col gap-6
                 shadow-lg shadow-black/30 cursor-pointer transform transition duration-300
                 hover:scale-105 hover:bg-white/10 active:scale-95 focus:ring-4 focus:ring-indigo-500/50
                 motion-safe:animate-fadeInUp"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr ${gradient} shadow-lg shadow-black/50`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </a>
  )
}

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-12 bg-[#01003D] text-white font-audiowide space-y-24">
      {/* Section 1: Services */}
      <div className="max-w-7xl mx-auto space-y-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Section 2: Freelance Platforms */}
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold tracking-tight">
            Hire us on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Freelance Platforms
            </span>
          </h3>
          <p className="text-white/70 text-lg">
            Prefer working through platforms? Find us on Fiverr and Upwork for trusted engagements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {platforms.map((item, index) => (
            <ExternalCard key={index} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-duration: 0.6s;
        }
      `}</style>
    </section>
  )
}
