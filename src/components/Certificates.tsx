'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Certificates() {
  const certificates = [
    {
      title: 'BSc (Hons) Computer Science - Software Engineering',
      institution: 'Kington University',
      logo: '/Kingston.webp',
      year: '2025 – Present',
      file: '',
      description: 'Specializing in Software Engineering, Web Technologies, and AI Integration.'
    },
    {
      title: 'Higher National Diploma in Computing',
      institution: 'Metropolitan College',
      logo: '/logos/metropolitan.png',
      year: '2020 – 2022',
      file: '/certificates/hnd-computing.pdf',
      description: 'Completed Level 5 HND in Computing with focus on application development.'
    },
    {
      title: 'Diploma in IT',
      institution: 'Metropolitan College',
      logo: '/logos/metropolitan.png',
      year: '2019 – 2020',
      file: '/certificates/diploma-it.pdf',
      description: 'Completed a comprehensive foundation program in Information Technology.'
    },
    {
      title: 'Diploma in English',
      institution: 'Metropolitan College',
      logo: '/logos/metropolitan.png',
      year: '2019 – 2020',
      file: '/certificates/diploma-english.pdf',
      description: 'Enhanced professional communication skills in academic and business contexts.'
    },
    {
      title: 'G.C.E A/L – Arts Stream',
      institution: 'Assiraj Muslim Maha Vidyalaya',
      logo: '/logos/assiraj.png',
      year: '2017 – 2019',
      file: '/certificates/al.pdf',
      description: 'Studied Political Science, Geography, and Islamic Civilization.'
    }
  ]

  return (
    <section className="bg-[#01003D] text-white font-audiowide py-20 px-6 md:px-12 min-h-screen" id='certificates'>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-16">Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-[#0A0A45] p-6 rounded-lg shadow-md hover:shadow-blue-500/30 transition-shadow flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Image src={cert.logo} alt={cert.institution} width={150} height={150} className="rounded-md object-contain" />
                <div>
                  <h2 className="text-xl md:text-2xl text-blue-300 font-semibold">{cert.title}</h2>
                  <p className="text-white/70 text-sm">{cert.institution} | {cert.year}</p>
                </div>
              </div>
              <p className="text-white/60 flex-grow mb-6">{cert.description}</p>
              <a href={cert.file} download target="_blank" rel="noopener noreferrer" className="self-start">
                <Button variant="default" className="text-white border-white hover:bg-white hover:text-[#01003D]">
                  Download Certificate <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
