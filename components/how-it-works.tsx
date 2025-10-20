import { MousePointerClick, Sparkles, Target } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Capte",
    description: "Formulários, WhatsApp, social e landing pages.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Nutra com IA",
    description: "Fluxos de qualificação, follow-up e conteúdos.",
  },
  {
    number: "03",
    icon: Target,
    title: "Converta",
    description: "Agendamento automático + CRM para fechar negócios.",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Como funciona</h2>
          <p className="text-xl text-neutral-600 text-balance">
            Três passos simples para transformar leads em clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#7950ff]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] opacity-20" />
                )}
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-neutral-200">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Demonstração da plataforma Web Click"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
