import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Programa30Dias() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#7950ff] to-[#6aa7ff] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight">
                Programa de{" "}
                <span className="text-white">
                  30 dias grátis
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-balance mb-8 leading-relaxed">
                Experimente nossa plataforma completa sem compromisso. Cancele quando quiser.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg font-semibold">
                  ✅ Assine e você pode cancelar grátis até o 30º dia se você não gostar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
                O que você ganha no programa de 30 dias
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <Zap className="w-12 h-12 text-[#7950ff] mx-auto mb-4" />
                    <CardTitle className="text-xl">Acesso Completo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Todas as funcionalidades da plataforma sem limitações
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <Clock className="w-12 h-12 text-[#7950ff] mx-auto mb-4" />
                    <CardTitle className="text-xl">30 Dias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Tempo suficiente para testar e ver resultados reais
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-[#7950ff] mx-auto mb-4" />
                    <CardTitle className="text-xl">Sem Risco</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Cancele a qualquer momento sem taxas ou multas
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <CheckCircle className="w-12 h-12 text-[#7950ff] mx-auto mb-4" />
                    <CardTitle className="text-xl">Suporte Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Nossa equipe te ajuda a configurar e otimizar tudo
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
                Como funciona o programa
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-[#7950ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cadastro Instantâneo</h3>
                    <p className="text-neutral-600">
                      Crie sua conta em menos de 2 minutos. Sem burocracias ou documentos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#7950ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Configuração Guiada</h3>
                    <p className="text-neutral-600">
                      Nossa equipe te ajuda a configurar tudo em uma chamada de 15 minutos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#7950ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Teste Completo</h3>
                    <p className="text-neutral-600">
                      Use todas as funcionalidades por 30 dias. Veja resultados reais no seu negócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#7950ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Decisão Livre</h3>
                    <p className="text-neutral-600">
                      Se não gostar, cancele grátis até o 30º dia. Sem perguntas, sem taxas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Pronto para começar?
              </h2>
              <p className="text-xl mb-8 opacity-90 text-balance">
                Junte-se a centenas de empresas que já transformaram seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#7950ff] hover:bg-neutral-100 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Começar programa grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <Link href="/#agendar">Agendar demonstração</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
