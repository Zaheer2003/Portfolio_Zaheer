'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 bg-[#01003D] text-white backdrop-blur border-b border-white/10 font-audiowide">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text flex items-center"
        >
          <span>&gt;_ Mohamed Zaheer</span>
          <BlinkingCursor />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <NavItem href="/" text="Home" active={pathname === '/'} />
          <NavItem href="/about" text="About" active={pathname === '/about'} />
          <NavItem href="/projects" text="Projects" active={pathname === '/projects'} />
          <NavItem href="/timeline" text="Timeline" active={pathname === '/timeline'} />
          <NavItem href="/contact" text="Contact" active={pathname === '/contact'} />
        </nav>

        {/* Services Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/services">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Services
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#01003D] text-white w-64 pt-10 px-6">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <NavItem href="/" text="Home" active={pathname === '/'} />
                <NavItem href="/about" text="About" active={pathname === '/about'} />
                <NavItem href="/projects" text="Projects" active={pathname === '/projects'} />
                <NavItem href="/timeline" text="Timeline" active={pathname === '/timeline'} />
                <NavItem href="/contact" text="Contact" active={pathname === '/contact'} />
                <Link href="/services">
                  <Button className="w-full cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mt-4">
                    Services
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, text, active }: { href: string; text: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        active ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {text}
    </Link>
  )
}

function BlinkingCursor() {
  return <span className="text-white animate-blink ml-1 text-2xl md:text-3xl leading-none">_</span>
}
