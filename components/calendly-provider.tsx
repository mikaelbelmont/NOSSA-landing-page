"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import CalendlyModal from "./calendly-modal"

interface CalendlyContextType {
  openCalendly: () => void
  closeCalendly: () => void
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined)

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCalendly = () => setIsOpen(true)
  const closeCalendly = () => setIsOpen(false)

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={closeCalendly} />
    </CalendlyContext.Provider>
  )
}

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (context === undefined) {
    throw new Error("useCalendly must be used within a CalendlyProvider")
  }
  return context
}
