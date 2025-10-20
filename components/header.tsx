"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#recursos", label: "Recursos" },
    { href: "#roi", label: "ROI" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] bg-clip-text text-transparent">
            Web Click
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button
            variant="outline"
            className="border-[#7950ff] text-[#7950ff] hover:bg-[#7950ff] hover:text-white transition-colors bg-transparent"
            asChild
          >
            <Link href="#">Área do cliente</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200">
              <Button
                variant="outline"
                className="w-full border-[#7950ff] text-[#7950ff] hover:bg-[#7950ff] hover:text-white transition-colors bg-transparent"
                asChild
              >
                <Link href="#">Área do cliente</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
