'use client'

import { GraduationCap, Download } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {educations} from '@/constants'
import { Variants } from 'framer-motion'
export default function Education() {
 

  // Animation variants for timeline items
  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ valid cubic-bezier (easeOut)
    },
  },
}

  return (
    <section id="education" className="bg-[#01003D] text-white font-audiowide py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">Education Timeline</h2>

        <div className="relative border-l border-blue-500 ml-6">
          {educations.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              {/* Timeline Icon */}
              <span className="absolute left-[-30px] top-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </span>

              {/* Education Card */}
              <div className="bg-[#0A0A45] p-6 rounded-lg shadow-md hover:shadow-blue-500/20 transition-shadow">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={40}
                    height={40}
                    className="rounded-md object-contain"
                    priority={idx === 0} // Optionally prioritize first image
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl text-blue-300">{item.title}</h3>
                    <p className="text-white/70 text-sm">
                      {item.institution} | {item.duration}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 mt-4 text-sm md:text-base">{item.description}</p>

                {item.certificate && (
                  <div className="mt-4">
                    <a
                      href={item.certificate}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download certificate for ${item.title}`}
                    >
                      <Button
                        variant="default"
                        className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                      >
                        Download Certificate <Download className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
