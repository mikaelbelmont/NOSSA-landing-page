"use client"

import { Button } from "@/components/ui/button"
import { useCalendly } from "./calendly-provider"
import Link from "next/link"

export default function Hero() {
  const { openCalendly } = useCalendly()

  const handleDemoClick = () => {
    openCalendly()
    console.log("[v0] CTA clicked: demo", { location: "hero" })
  }

  const handleTrialClick = () => {
    console.log("[v0] CTA clicked: trial", { location: "hero" })
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight">
            Marketing, automações e IA — em um só lugar,{" "}
            <span className="bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] bg-clip-text text-transparent">
              do lead ao faturamento
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 text-balance mb-8 leading-relaxed">
            Unifique captação, nutrição e agendamento para aumentar vendas sem aumentar o time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleDemoClick}
              data-cta="demo"
              className="bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] hover:opacity-90 text-lg px-8 py-6 w-full sm:w-auto"
            >
              Agendar demonstração
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleTrialClick}
              data-cta="trial"
              className="text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              asChild
            >
              <Link href="/contato?trial=true">Testar 14 dias grátis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
