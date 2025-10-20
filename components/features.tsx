import { Globe, Bot, MessageSquare, Calendar, Workflow, TrendingUp, Mail, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Globe,
    title: "Construtor de sites",
    description: "Arraste e solte com modelos prontos.",
  },
  {
    icon: Bot,
    title: "Chatbot de IA treinada",
    description: "Nutre leads e agenda compromissos.",
  },
  {
    icon: MessageSquare,
    title: "Conversas multifuncionais",
    description: "SMS, e-mail, WhatsApp e DMs.",
  },
  {
    icon: Calendar,
    title: "Automações de marketing",
    description: "Postagens agendadas e gotejamento de 12 meses.",
  },
  {
    icon: Workflow,
    title: "Automações de processos",
    description: "Acompanhamento automatizado que engaja.",
  },
  {
    icon: TrendingUp,
    title: "Automações de vendas",
    description: "Follow-up inteligente do funil.",
  },
  {
    icon: Mail,
    title: "E-mail marketing",
    description: "Atualize e eduque sua base.",
  },
  {
    icon: Database,
    title: "CRM completo",
    description: "Pipeline simples e visível.",
  },
]


export default function Features() {
  return (
    <section id="recursos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Recursos completos</h2>
          <p className="text-xl text-neutral-600 text-balance">Tudo que você precisa para captar, nutrir e converter</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow border-neutral-200">
                <Icon className="w-8 h-8 text-[#7950ff] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
