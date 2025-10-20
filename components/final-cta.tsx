"use client"

import { Button } from "@/components/ui/button"
import { useCalendly } from "./calendly-provider"
import Link from "next/link"

export default function FinalCTA() {
  const { openCalendly } = useCalendly()

  const handleDemoClick = () => {
    openCalendly()
    console.log("[v0] CTA clicked: demo", { location: "final-cta" })
  }

  const handleTrialClick = () => {
    console.log("[v0] CTA clicked: trial", { location: "final-cta" })
  }

  return (
    <section id="agendar" className="py-20 md:py-32 bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Veja em 15 minutos como você economiza e vende mais
          </h2>
          <p className="text-xl mb-8 opacity-90 text-balance">Demonstração guiada e sem compromisso.</p>
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Placeholder for inline Calendly calendar - to be implemented later */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full max-w-md text-center">
              <h3 className="text-xl font-semibold mb-4">Calendário de Agendamento</h3>
              <p className="text-white/80 mb-4">Selecione uma data e horário para sua demonstração</p>
              <div className="bg-white/20 rounded-lg p-6 text-white/60">
                [Calendly Calendar Widget - Coming Soon]
              </div>
            </div>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleTrialClick}
              data-cta="trial"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              asChild
            >
              <Link href="/programa-30-dias">Aderir programa 30 dias</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
