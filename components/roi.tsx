"use client"

import { Card } from "@/components/ui/card"
import { useCalendly } from "./calendly-provider"
import { Users, Clock, TrendingUp, Zap } from "lucide-react"

// Placeholder values - easily editable
const ROI_DATA = {
  separateTools: {
    automation: 299,
    email: 149,
    crm: 199,
    chatbot: 249,
    total: 896,
  },
  manualHours: {
    hoursPerMonth: 40,
    costPerHour: 50,
    total: 2000,
  },
  webClick: {
    price: 497,
  },
  savings: {
    monthly: 2399,
    conversionIncrease: 35,
  },
}

const metrics = [
  {
    icon: Users,
    title: "Mais leads qualificados",
    before: "~50 leads/mês",
    after: "~180 leads/mês",
    improvement: "+260%",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Economia de tempo",
    before: "40h/mês em tarefas manuais",
    after: "10h/mês com automações",
    improvement: "30h economizadas",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Taxa de conversão",
    before: "2.5% de conversão",
    after: "4.8% de conversão",
    improvement: "+92%",
    color: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Velocidade de resposta",
    before: "24h tempo médio",
    after: "Instantâneo com IA",
    improvement: "100x mais rápido",
    color: "text-orange-600",
  },
]

export default function ROI() {
  const { openCalendly } = useCalendly()

  const handleDemoClick = () => {
    openCalendly()
    console.log("[v0] CTA clicked: demo", { location: "roi" })
  }

  return (
    <section id="roi" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            O impacto real da Web Click no seu negócio
          </h2>
          <p className="text-xl text-neutral-600 text-balance">
            Veja como empresas transformam resultados com automação e IA
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.title} className="p-8 border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-neutral-100 ${metric.color}`}>
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <span className="text-sm text-neutral-600">Antes</span>
                    <span className="font-semibold text-neutral-700">{metric.before}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#7950ff]/10 to-[#6aa7ff]/10 rounded-lg border border-[#7950ff]/20">
                    <span className="text-sm text-neutral-600">Com Web Click</span>
                    <span className="font-semibold text-[#7950ff]">{metric.after}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Melhoria</span>
                    <span className={`text-lg font-bold ${metric.color}`}>{metric.improvement}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] text-white">
            <p className="text-2xl md:text-3xl font-bold mb-2">Resultados reais de empresas que automatizaram com IA</p>
            <p className="text-lg opacity-90">Menos trabalho manual, mais vendas e crescimento escalável</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
