import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CalendlyProvider } from "@/components/calendly-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web Click - Marketing, Automações e IA em um só lugar",
  description:
    "Unifique captação, nutrição e agendamento para aumentar vendas sem aumentar o time. Marketing, automações e IA do lead ao faturamento.",
  openGraph: {
    title: "Web Click - Marketing, Automações e IA em um só lugar",
    description: "Unifique captação, nutrição e agendamento para aumentar vendas sem aumentar o time.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-bg="ice">
      <body className={inter.className}>
        <div className="bg-global-layer" />
        <CalendlyProvider>{children}</CalendlyProvider>
      </body>
    </html>
  )
}
