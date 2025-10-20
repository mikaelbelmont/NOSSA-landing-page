import Link from "next/link"
import { WHATS_URL } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7950ff] to-[#6aa7ff] bg-clip-text text-transparent mb-4">
              Web Click
            </div>
            <p className="text-sm leading-relaxed">Marketing, automações e IA em um só lugar.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#recursos" className="hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#precos" className="hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href={WHATS_URL} target="_blank" className="hover:text-white transition-colors">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="mailto:contato@webclick.com.br" className="hover:text-white transition-colors">
                  E-mail
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="hover:text-white transition-colors">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Web Click. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
