import Header from "@/components/header"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import Benefits from "@/components/benefits"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import ROI from "@/components/roi"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <Features />
        <ROI />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
