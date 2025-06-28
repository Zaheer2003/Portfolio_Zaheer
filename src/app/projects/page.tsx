'use client'

import React from 'react'
import MaintenanceSVG from '@/public/construction.svg' // adjust path accordingly
import Image from 'next/image'

export default function UnderMaintenance() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#01003D] text-white font-audiowide px-6">
      <div className="w-48 h-48 mb-8 relative">
        <Image src={MaintenanceSVG} alt="Under Maintenance" fill style={{ objectFit: 'contain' }} />
      </div>

      <h1 className="text-5xl font-bold mb-4">Under Maintenance</h1>
      <p className="text-center max-w-md text-yellow-300 text-lg">
        This page is currently under development. We are working hard to bring you an amazing experience. Please check back soon.
      </p>
    </section>
  )
}
