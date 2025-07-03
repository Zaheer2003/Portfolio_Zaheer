'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
  Briefcase,
  Globe,
} from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#01003D] text-white">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Let's Connect</h1>
        <p className="text-white/70 mt-4 text-lg">
          Whether you have a project in mind, want to discuss potential opportunities, or just want to say hello, Id love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div className="bg-[#0D0D2B] rounded-xl p-8 shadow-lg border border-white/10">
          <h2 className="text-3xl font-bold mb-1">Get In Touch</h2>
          <p className="text-white/60 mb-6">
            Lets discuss your next project or collaboration
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project or idea..."
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Send Message
            </button>
            <p className="text-green-400 text-sm mt-2 text-center">
              • Secure connection • Response within 24 hours
            </p>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#0D0D2B] rounded-xl p-6 border border-white/10 shadow">
            <h3 className="text-xl font-semibold mb-3">Quick Contact</h3>
            <p className="flex items-center gap-3 text-white/80 mb-2">
              <Mail className="w-5 h-5" /> mhdzaheer2003@gmail.com
            </p>
            <p className="flex items-center gap-3 text-white/80 mb-2">
              <Phone className="w-5 h-5" /> +94 787325149
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <MapPin className="w-5 h-5" /> Kurunegala, Sri Lanka
            </p>
          </div>

          <div className="bg-[#0D0D2B] rounded-xl p-6 border border-white/10 shadow">
            <h3 className="text-xl font-semibold mb-3">Follow me for updates and insights</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="https://github.com/Zaheer2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#181C2F] px-4 py-3 rounded-lg hover:bg-[#2a2e4d]"
              >
                <Github className="w-5 h-5 text-white" />
                GitHub <span className="ml-auto text-white/50 text-sm">View my code</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/mohamed-zaheer-335292246/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0077B5]/20 px-4 py-3 rounded-lg hover:bg-[#0077B5]/30"
              >
                <Linkedin className="w-5 h-5 text-white" />
                LinkedIn <span className="ml-auto text-white/50 text-sm">Professional network</span>
              </Link>

              <Link
                href="https://wa.me/94787325149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/20 px-4 py-3 rounded-lg hover:bg-[#25D366]/30"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="invert"
                />
                WhatsApp <span className="ml-auto text-white/50 text-sm">Quick chat</span>
              </Link>

              <Link
                href="https://www.fiverr.com/s/Q7ENDzj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-700/20 px-4 py-3 rounded-lg hover:bg-green-700/30"
              >
                <Briefcase className="w-5 h-5 text-white" />
                Fiverr <span className="ml-auto text-white/50 text-sm">Hire me on Fiverr</span>
              </Link>

              <Link
                href="https://www.upwork.com/freelancers/~01c0265241b525662c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-500/20 px-4 py-3 rounded-lg hover:bg-blue-500/30"
              >
                <Globe className="w-5 h-5 text-white" />
                Upwork <span className="ml-auto text-white/50 text-sm">Freelance Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
