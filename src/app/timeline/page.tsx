'use client'

import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#01003D] text-white px-6">
      <Image
        src="/maintenance.svg"
        alt="Timeline Under Maintenance"
        width={400}
        height={400}
        priority
        className="mb-6"
      />
      <h1 className="text-3xl font-bold text-center">Timeline Coming Soon</h1>
      <p className="text-white/70 mt-2 text-center max-w-md">
        This section is under construction. Stay tuned for updates!
      </p>
    </div>
  )
}
