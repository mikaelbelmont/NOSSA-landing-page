"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCalendly } from "./calendly-provider"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Essencial",
    price: "A partir de R$ —",
    period: "/mês",
    description: "Para times enxutos que precisam captar e começar.",
    features: [
      "Landing pages básicas",
      "Formulários de captura",
      "E-mail marketing básico",
      "Integração WhatsApp",
      "CRM simples",
      "Automações essenciais",
    ],
    cta: "Agendar demonstração",
    ctaVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "A partir de R$ —",
    period: "/mês",
    description: "Para quem quer escalar com IA e funil completo.",
    features: [
      "Tudo do Essencial",
      "Chatbot de IA treinada",
      "Gotejamento 12 meses",
      "Comunicação multicanal",
      "Relatórios avançados",
      "Permissões de equipe",
      "Automações ilimitadas",
    ],
    cta: "Agendar demonstração",
    ctaVariant: "default" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Projeto guiado, onboarding dedicado, integrações avançadas.",
    features: [
      "Tudo do Profissional",
      "Onboarding dedicado",
      "Integrações customizadas",
      "SLAs garantidos",
      "Suporte prioritário",
      "Consultoria estratégica",
    ],
    cta: "Falar com especialista",
    ctaVariant: "outline" as const,
    highlighted: false,
  },
]

export default function Pricing() {
  const { openCalendly } = useCalendly()

  const handleCTAClick = (planName: string) => {
    openCalendly()
    console.log("[v0] CTA clicked: demo", { location: "pricing", plan: planName })
  }

  const handleTrialClick = () => {
    console.log("[v0] CTA clicked: trial", { location: "pricing" })
  }

  return (
    <section id="precos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Planos para cada estágio de crescimento</h2>
          <p className="text-xl text-neutral-600 text-balance">
            Transparência para começar agora. Personalização quando você precisar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 flex flex-col ${
                plan.highlighted ? "border-2 border-[#7950ff] shadow-xl relative" : "border-neutral-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-neutral-600">{plan.period}</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#7950ff] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <Button
                  className={`w-full ${
                    plan.ctaVariant === "default" ? "bg-gradient-to-r from-[#7950ff] to-[#6aa7ff]" : ""
                  }`}
                  variant={plan.ctaVariant}
                  onClick={() => handleCTAClick(plan.name)}
                  data-cta="demo"
                >
                  {plan.cta}
                </Button>
                {plan.name !== "Enterprise" && (
                  <Link
                    href="/contato?trial=true"
                    onClick={handleTrialClick}
                    data-cta="trial"
                    className="block text-center text-sm text-[#7950ff] hover:underline"
                  >
                    Testar 14 dias grátis
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-sm text-neutral-600">Preços "a partir de" — definimos juntos o melhor pacote.</p>
          <p className="text-sm text-neutral-600">Sem fidelidade no teste.</p>
        </div>
      </div>
    </section>
  )
}
