import { SiteHeader } from "../components/siteheader"
import { HeroSection } from "../components/herosection"
import { FeaturedCarousel } from "../components/featured-carousel"
import { ServicesSection } from "../components/servicesection"
import { CombosSection } from "@/components/combos-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { PaymentMethods } from "../components/payment-methods"
import { SiteFooter } from "../components/sitefooter"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedCarousel />
        <ServicesSection />
        <CombosSection />
        <TestimonialsSection />
        <PaymentMethods />
      </main>
      <SiteFooter />
    </div>
  )
}
