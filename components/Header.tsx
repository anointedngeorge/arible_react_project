'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg"
            alt="Arible Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                <Link href="/" className="text-gray-600 hover:text-[#000066]">Home</Link>
                <Link href="/properties" className="text-gray-600 hover:text-[#000066]">Properties</Link>
                <Link href="/agents" className="text-gray-600 hover:text-[#000066]">Agents</Link>
                <Link href="/about" className="text-gray-600 hover:text-[#000066]">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-[#000066]">Contact</Link>
                <Link href="/get-in-touch" className="w-full">
                  <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Get in Touch</Button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-[#000066]">Home</Link>
          <Link href="/properties" className="text-gray-600 hover:text-[#000066]">Properties</Link>
          <Link href="/agents" className="text-gray-600 hover:text-[#000066]">Agents</Link>
          <Link href="/about" className="text-gray-600 hover:text-[#000066]">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#000066]">Contact</Link>
        </nav>
        <Link href="/get-in-touch">
          <Button className="hidden md:inline-flex bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Get in Touch</Button>
        </Link>
      </div>
    </header>
  )
}

