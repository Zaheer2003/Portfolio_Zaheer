'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const whatsappNumber = '94758511400' // International format, no + or spaces

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Build WhatsApp URL with well-formatted message
  const buildWhatsAppUrl = () => {
    const message = `
Hello, my name is ${formData.name}.
Email: ${formData.email}

Message:
${formData.message}


    `.trim()

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  const handleClick = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="bg-[#01003D] text-white font-audiowide py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-16 tracking-wide text-gradient-blue">
          Contact Me via WhatsApp
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-5">
              <MapPin className="w-7 h-7 text-blue-400" />
              <p className="text-white/90 text-lg md:text-xl font-semibold select-text">
                123 Your Street, Your City, Your Country
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Phone className="w-7 h-7 text-blue-400" />
              <p className="text-white/90 text-lg md:text-xl font-semibold select-text">+94 75 851 1400</p>
            </div>
            <div className="flex items-center gap-5">
              <Mail className="w-7 h-7 text-blue-400" />
              <p className="text-white/90 text-lg md:text-xl font-semibold select-text">
                mhdzaheer2003@gmail.com
              </p>
            </div>
          </div>

          {/* Inputs and WhatsApp Button */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg border border-white/20 space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-white text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full rounded-md px-4 py-3 text-[#01003D] font-medium transition-shadow duration-300
                  focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-70
                  ${errors.name ? 'border-2 border-red-500 shadow-sm shadow-red-500/50' : 'border border-transparent'}
                `}
              />
              {errors.name && <p className="text-red-500 mt-1 text-sm font-semibold">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-white text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full rounded-md px-4 py-3 text-[#01003D] font-medium transition-shadow duration-300
                  focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-70
                  ${errors.email ? 'border-2 border-red-500 shadow-sm shadow-red-500/50' : 'border border-transparent'}
                `}
              />
              {errors.email && <p className="text-red-500 mt-1 text-sm font-semibold">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-white text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Write your message here"
                className={`w-full rounded-md px-4 py-3 text-[#01003D] font-medium transition-shadow duration-300
                  focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-70 resize-none
                  ${errors.message ? 'border-2 border-red-500 shadow-sm shadow-red-500/50' : 'border border-transparent'}
                `}
              />
              {errors.message && <p className="text-red-500 mt-1 text-sm font-semibold">{errors.message}</p>}
            </div>

            <button
              onClick={handleClick}
              className="w-full flex items-center justify-center gap-3 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 py-3 rounded-lg transition-colors duration-300"
              type="button"
            >
              <BsWhatsapp className="w-6 h-6" />
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient-blue {
          background: linear-gradient(90deg, #4f8aff, #1752f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  )
}
