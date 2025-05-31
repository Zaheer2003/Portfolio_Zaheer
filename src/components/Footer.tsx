import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#01003D] text-white font-audiowide border-t border-white/10 mt-10'>
        <div className='container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-2xl mb-3'>Mohamed Zaheer</h2>
                <p className='text-sm text-white/70'>Aspiring Full-Stack Developer. Passionate about crafting modern web experiences.</p>
            </div>
            <div>
                <h3 className='text-lg mb-4'>Quick Links</h3>
                <ul className='space-y-2 text-sm'>
                    <li><Link href={'/'} className='hover:text-blue-400'>About</Link></li>
                    <li><Link href={'/'} className='hover:text-blue-400'>Education</Link></li>
                    <li><Link href={'/'} className='hover:text-blue-400'>Certificates</Link></li>
                    <li><Link href={'/'} className='hover:text-blue-400'>Skills</Link></li>
                    <li><Link href={'/'} className='hover:text-blue-400'>Projects</Link></li>
                    <li><Link href={'/'} className='hover:text-blue-400'>Contact</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg mb-4'>Follow Me</h3>
                <div className='flex gap-4 text-white/70 hover:text-white'>
                    <Link href='/' target='_blank' aria-label='LinkedIn'><Linkedin className='hover:text-blue-400 transition'/></Link>
                    <Link href='/' target='_blank' aria-label='GitHub'><Github className='hover:text-blue-400 transition'/></Link>
                    <Link href='/' target='_blank' aria-label='Instagram'><Instagram className='hover:text-blue-400 transition'/></Link>
                    <Link href='/' target='_blank' aria-label='Gmail'><Mail className='hover:text-blue-400 transition'/></Link>
                </div>
            </div>
        </div>
        <div className='border-t border-white/10 py-4 text-center text-sm text-white/50'> 
            © {new Date().getFullYear()} Mohamed Zaheer. All Right Reserved
        </div>
    </footer>
  )
}
