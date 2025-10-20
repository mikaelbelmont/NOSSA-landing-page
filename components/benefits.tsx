import { TrendingUp, UserCheck, Zap, Users, BarChart3, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais leads qualificados",
    description: "Capture em múltiplos canais e centralize em um só lugar.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: UserCheck,
    title: "Menos no-show e fricção",
    description: "Confirmações automáticas em WhatsApp, e-mail e SMS.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: Zap,
    title: "Ciclo de vendas mais curto",
    description: "Nutrição por IA que responde e leva à próxima ação.",
    gradient: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: Users,
    title: "Operação mais leve",
    description: "Automações que reduzem tarefas repetitivas.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: BarChart3,
    title: "Visão do funil",
    description: "CRM simples com etapas e métricas que você entende.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    icon: Layers,
    title: "Sem costurar 10 ferramentas",
    description: "Um stack mais simples e barato.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
  },
]

export default function Benefits() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Resultados que importam
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Transforme sua operação com automações inteligentes que geram resultados mensuráveis e crescimento sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={benefit.title} 
                className={`
                  relative p-8 border-0 shadow-lg
                  bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm
                  overflow-hidden
                  animate-in fade-in slide-in-from-bottom-4
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} 
                    flex items-center justify-center mb-6 shadow-lg
                  `}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
