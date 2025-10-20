import { MousePointerClick, Sparkles, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <section id="como-funciona" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Três passos simples para transformar leads em clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <Card className={`
                  relative p-8 border-0 shadow-lg
                  bg-gradient-to-br from-purple-50 to-blue-50 backdrop-blur-sm
                  overflow-hidden text-center
                  animate-in fade-in slide-in-from-bottom-4
                `} style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] text-white text-2xl font-bold mb-6 shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[100%] w-[50%] h-0.5 bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] opacity-30 transform -translate-y-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
