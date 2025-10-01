import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Slider from "@/components/Slider";

import beforeTwo from '../../public/Before-2.jpg'
import afterTwo from '../../public/After-2.jpg'
import beforeThree from '../../public/Before-3.jpg'
import afterThree from '../../public/After-3.jpg'
import beforeFour from '../../public/Befor-4.jpg'
import afterFour from '../../public/After-4.jpg'
import beforeOne from '../../public/before-1.jpg'
import afterOne from '../../public/after-1.jpg'
import Services from "@/components/Services";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Step from "@/components/Step";
import Value from "@/components/Value";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import CommercialClient from "@/components/CommercialClient";
import Call from "@/components/Call";
import Accordion from "@/components/Acccordian";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mb-10">
      <header>
        <Header />
      </header>
      <main>
        <section aria-label="Hero Section">
          <HeroBanner />
        </section>
        <section aria-label="Our Features">
          <Features />
        </section>
        <section aria-label="Slider">
          <Slider
            slides={[
              {
                beforeImage: beforeTwo.src,
                afterImage: afterTwo.src,
              },
              {
                beforeImage: beforeThree.src,
                afterImage: afterThree.src,
              },
              {
                beforeImage: beforeFour.src,
                afterImage: afterFour.src,
              },
              {
                beforeImage: beforeOne.src,
                afterImage: afterOne.src,
              },
            ]}
            height={400}
          />
        </section>
        <section aria-label="Our Services">
          <Services />
        </section>

        <section aria-label="About OzShine Cleaners">
          <About />
        </section>

        <section aria-label="Special Offer">
          <CallToAction />
        </section>

        <section aria-label="Steps to Book">
          <Step />
        </section>

        <section aria-label="Our Values">
          <Value />
        </section>

        <section aria-label="Customer Testimonials">
          <Testimonial />
        </section>

        <section aria-label="Our Clients">
          <Clients />
        </section>

        <section aria-label="Commercial Cleaning Clients">
          <CommercialClient />
        </section>

        <section aria-label="Call Us">
          <Call />
        </section>
        <section aria-label="Frequently Asked Questions">
          <Accordion />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}