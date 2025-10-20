import { TrendingUp, UserCheck, Zap, Users, BarChart3, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais leads qualificados",
    description: "Capture em múltiplos canais e centralize em um só lugar.",
  },
  {
    icon: UserCheck,
    title: "Menos no-show e fricção",
    description: "Confirmações automáticas em WhatsApp, e-mail e SMS.",
  },
  {
    icon: Zap,
    title: "Ciclo de vendas mais curto",
    description: "Nutrição por IA que responde e leva à próxima ação.",
  },
  {
    icon: Users,
    title: "Operação mais leve",
    description: "Automações que reduzem tarefas repetitivas.",
  },
  {
    icon: BarChart3,
    title: "Visão do funil",
    description: "CRM simples com etapas e métricas que você entende.",
  },
  {
    icon: Layers,
    title: "Sem costurar 10 ferramentas",
    description: "Um stack mais simples e barato.",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Resultados que importam</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow border-neutral-200">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
