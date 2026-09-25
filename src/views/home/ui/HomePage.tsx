import { AboutSection } from "@/widgets/about";
import { BookingSection } from "@/widgets/booking";
import { ContactsFooter } from "@/widgets/footer";
import { HeaderWidget } from "@/widgets/header";
import { HeroSection } from "@/widgets/hero";
import { ProgramsSection } from "@/widgets/programs";
import { ReviewsSection } from "@/widgets/reviews";
import { TrainersSection } from "@/widgets/trainers";
import { businessJsonLd } from "../model/seo";
import MotionEnhancements from "./MotionEnhancements";

export default function HomePage() {
  return (
    <main>
      <MotionEnhancements />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
          <source src="/media/hero-video.mov" type="video/quicktime" />
        </video>
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
  );
}
