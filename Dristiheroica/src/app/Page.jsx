import { SiteHeader } from "../components/siteheader"
import { HeroSection } from "../components/herosection"
import { FeaturedCarousel } from "../components/featured-carousel"
import { ServicesSection } from "../components/servicesection"
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
        <PaymentMethods />
      </main>
      <SiteFooter />
    </div>
  )
}
