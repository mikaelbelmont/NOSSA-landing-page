"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CALENDLY_URL, WHATS_URL } from "@/lib/constants"

function ContactContent() {
  const searchParams = useSearchParams()
  const isTrial = searchParams.get("trial") === "true"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock form submission - integrate with your API
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        consent: false,
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {isTrial ? "Comece seu teste grátis" : "Entre em contato"}
              </h1>
              <p className="text-xl text-neutral-600">
                {isTrial
                  ? "Preencha o formulário ou agende uma demonstração para começar"
                  : "Agende uma demonstração ou envie sua mensagem"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="p-8 border-neutral-200">
                <h2 className="text-2xl font-bold mb-6">{isTrial ? "Solicitar teste grátis" : "Envie sua mensagem"}</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold mb-2">Mensagem enviada com sucesso!</p>
                    <p className="text-green-700 text-sm">Entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem (opcional)</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                        Concordo em receber comunicações da Web Click e estou ciente da{" "}
                        <a href="/privacidade" className="text-[#7950ff] hover:underline">
                          Política de Privacidade
                        </a>
                        .
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-[#7950ff] to-[#6aa7ff]" size="lg">
                      {isTrial ? "Solicitar teste grátis" : "Enviar mensagem"}
                    </Button>
                  </form>
                )}
              </Card>

              {/* Calendly Embed */}
              <div className="space-y-6">
                <Card className="p-8 border-neutral-200">
                  <h2 className="text-2xl font-bold mb-4">Agende uma demonstração</h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Escolha o melhor horário para uma demonstração guiada de 15 minutos.
                  </p>
                  <div className="w-full h-[500px] rounded-lg overflow-hidden border border-neutral-200">
                    <iframe
                      src={CALENDLY_URL}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Agendar demonstração"
                    />
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-[#7950ff]/5 to-[#6aa7ff]/5 border-neutral-200">
                  <h3 className="font-semibold mb-3">Prefere WhatsApp?</h3>
                  <p className="text-sm text-neutral-600 mb-4">Fale diretamente com nossa equipe</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={WHATS_URL} target="_blank" rel="noopener noreferrer">
                      Abrir WhatsApp
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ContatoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-[#7950ff] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-neutral-600">Carregando...</p>
          </div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  )
}
