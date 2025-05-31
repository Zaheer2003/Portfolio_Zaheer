import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#01003D] text-white backdrop-blur border-b border-white/10 font-audiowide">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl tracking-wider">
          Mohamed Zaheer
        </Link>
        <nav className="hidden md:flex space-x-6 items-center text-lg">
          <NavItem href="/" text="About" />
          <NavItem href="/" text="Education" />
          <NavItem href="/" text="Skills" />
          <NavItem href="/" text="Certificates" />
          <NavItem href="/" text="Projects" />
          <NavItem href="/" text="Contacts" />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#01003D] text-white">
              <nav className="flex flex-col space-y-5 mt-10 text-lg">
                <NavItem href="/" text="About" />
                <NavItem href="/" text="Education" />
                <NavItem href="/" text="Skills" />
                <NavItem href="/" text="Certificates" />
                <NavItem href="/" text="Projects" />
                <NavItem href="/" text="Contacts" />
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
