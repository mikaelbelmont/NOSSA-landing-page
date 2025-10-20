"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { CALENDLY_URL } from "@/lib/constants"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <iframe src={CALENDLY_URL} width="100%" height="100%" frameBorder="0" title="Agendar demonstração" />
      </div>
    </div>
  )
}
