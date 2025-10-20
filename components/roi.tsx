"use client"

import { Card } from "@/components/ui/card"
import { useCalendly } from "./calendly-provider"
import { Users, Clock, TrendingUp, Zap } from "lucide-react"

const metrics = [
  {
    icon: Users,
    title: "Mais leads qualificados",
    before: "~50 leads/mês",
    after: "~180 leads/mês",
    improvement: "+260%",
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Clock,
    title: "Economia de tempo",
    before: "40h/mês em tarefas manuais",
    after: "10h/mês com automações",
    improvement: "30h economizadas",
    color: "text-green-600",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Taxa de conversão",
    before: "2.5% de conversão",
    after: "4.8% de conversão",
    improvement: "+92%",
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Velocidade de resposta",
    before: "24h tempo médio",
    after: "Instantâneo com IA",
    improvement: "100x mais rápido",
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-600",
  },
]

export default function ROI() {
  const { openCalendly } = useCalendly()

  return (
    <section id="roi" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            O impacto real da Web Click no seu negócio
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Veja como empresas transformam resultados com automação e IA
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card 
                key={metric.title} 
                className={`
                  relative p-10 border-0 shadow-lg bg-white
                  overflow-hidden
                  animate-in fade-in slide-in-from-bottom-4
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{metric.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-600">Antes</span>
                      <span className="font-semibold text-gray-700">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#7950ff]/10 to-[#6aa7ff]/10 rounded-xl border border-[#7950ff]/20">
                      <span className="text-sm font-medium text-gray-600">Com Web Click</span>
                      <span className="font-semibold text-[#7950ff]">{metric.after}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Melhoria</span>
                      <span className={`text-xl font-bold ${metric.color}`}>{metric.improvement}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
