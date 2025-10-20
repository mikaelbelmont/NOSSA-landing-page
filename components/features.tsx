import { Globe, Bot, MessageSquare, Calendar, Workflow, TrendingUp, Mail, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Globe,
    title: "Construtor de sites",
    description: "Arraste e solte com modelos prontos.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Bot,
    title: "Chatbot de IA treinada",
    description: "Nutre leads e agenda compromissos.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: MessageSquare,
    title: "Conversas multifuncionais",
    description: "SMS, e-mail, WhatsApp e DMs.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: Calendar,
    title: "Automações de marketing",
    description: "Postagens agendadas e gotejamento de 12 meses.",
    gradient: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    icon: Workflow,
    title: "Automações de processos",
    description: "Acompanhamento automatizado que engaja.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Automações de vendas",
    description: "Follow-up inteligente do funil.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    icon: Mail,
    title: "E-mail marketing",
    description: "Atualize e eduque sua base.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    icon: Database,
    title: "CRM completo",
    description: "Pipeline simples e visível.",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
  },
]


export default function Features() {
  return (
    <section id="recursos" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Recursos completos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tudo que você precisa para captar, nutrir e converter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title} 
                className={`
                  relative p-8 border-0 shadow-lg
                  bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm
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
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} 
                    flex items-center justify-center mb-6 shadow-lg
                  `}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {feature.description}
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
