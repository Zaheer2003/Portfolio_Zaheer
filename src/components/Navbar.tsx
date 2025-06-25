import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#01003D] text-white backdrop-blur border-b border-white/10 font-audiowide">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-3xl tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text flex items-center">
            <span>&gt;_ Mohamed Zaheer</span>
          <BlinkingCursor />
          </Link>
        </div>


        {/* Center - Nav Items */}
        <nav className="hidden md:flex space-x-6 items-center text-lg">
          <NavItem href="#home" text="Home" />
          <NavItem href="#about" text="About" />
          <NavItem href="#timeline" text="Timeline" />
          <NavItem href="#contact" text="Contact" />
        </nav>

        {/* Right - Donate Button */}
        <div className="hidden md:block">
          <Link href="#donate">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#01003D] text-white">
              <nav className="flex flex-col space-y-5 mt-10 text-lg">
                <NavItem href="#home" text="Home" />
                <NavItem href="#about" text="About" />
                <NavItem href="#timeline" text="Timeline" />
                <NavItem href="#contact" text="Contact" />
                <Link href="#services">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 mt-4 cursor-pointer">
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

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 hover:text-blue-400"
    >
      {text}
    </Link>
  )
}

function BlinkingCursor() {
  return <span className="text-white animate-blink ml-1 text-3xl font-normal leading-none">_</span>
}

