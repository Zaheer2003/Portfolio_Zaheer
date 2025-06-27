import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#01003D] text-white font-audiowide border-t border-white/10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-2xl mb-3">Mohamed Zaheer</h2>
          <p className="text-sm text-white/70">
            Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/timeline" className="hover:text-blue-400 transition">Timeline</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg mb-4">Connect with Me</h3>
          <div className="flex gap-4 text-white/70">
            <Link href="https://www.linkedin.com/in/mohamed-zaheer-335292246/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="hover:text-blue-400 transition" />
            </Link>
            <Link href="https://github.com/Zaheer2003" target="_blank" aria-label="GitHub">
              <Github className="hover:text-blue-400 transition" />
            </Link>
            <Link href="https://www.instagram.com/_zaheer_mhd_/" target="_blank" aria-label="Instagram">
              <Instagram className="hover:text-blue-400 transition" />
            </Link>
            <Link href="mailto:mhdzaheer2003@gmail.com" aria-label="Email">
              <Mail className="hover:text-blue-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Mohamed Zaheer. All rights reserved.
      </div>
    </footer>
  )
}
