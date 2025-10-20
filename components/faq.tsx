import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a implementação?",
    answer:
      "A implementação é guiada pela nossa equipe. Após a contratação, você terá acesso imediato à plataforma e agendaremos sessões de onboarding para configurar suas automações, integrar suas ferramentas e treinar seu time.",
  },
  {
    question: "Quais integrações estão disponíveis?",
    answer:
      "Integramos com WhatsApp, Meta (Facebook/Instagram), Google Ads, Stripe, Shopify, WordPress, Zoom, Twilio e diversas outras ferramentas. Se você usa uma ferramenta específica, consulte nossa equipe sobre integrações customizadas.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte via chat, e-mail e WhatsApp. Clientes dos planos Profissional e Enterprise têm acesso a suporte prioritário com tempos de resposta garantidos.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer:
      "Sim! Oferecemos 14 dias de teste grátis sem necessidade de cartão de crédito. Você terá acesso completo às funcionalidades do plano escolhido.",
  },
  {
    question: "Como funciona o cancelamento?",
    answer:
      "Você pode cancelar a qualquer momento sem multas ou taxas. No período de teste, não há compromisso. Após a contratação, você pode cancelar com 30 dias de antecedência.",
  },
  {
    question: "Os dados estão protegidos (LGPD)?",
    answer:
      "Sim, somos 100% compatíveis com a LGPD. Seus dados e os dados dos seus clientes são criptografados, armazenados em servidores seguros no Brasil, e você tem controle total sobre privacidade e consentimento.",
  },
  {
    question: "Preciso de conhecimento técnico?",
    answer:
      "Não! A Web Click foi desenvolvida para ser intuitiva. Nosso construtor visual permite criar automações sem código. Para necessidades mais avançadas, nossa equipe oferece suporte técnico.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Perguntas frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
