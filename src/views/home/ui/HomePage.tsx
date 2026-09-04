import { AboutSection } from '@/widgets/about'
import { BookingSection } from '@/widgets/booking'
import { ContactsFooter } from '@/widgets/footer'
import { HeaderWidget } from '@/widgets/header'
import { HeroSection } from '@/widgets/hero'
import { ProgramsSection } from '@/widgets/programs'
import { ReviewsSection } from '@/widgets/reviews'
import { TrainersSection } from '@/widgets/trainers'
import { businessJsonLd } from '../model/seo'

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      <section className="hero">
        <HeaderWidget />

        <HeroSection />
      </section>

      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <ReviewsSection />
      <BookingSection />
      <ContactsFooter />
    </main>
  )
}
