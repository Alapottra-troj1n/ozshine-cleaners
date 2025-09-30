import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Slider from "@/components/Slider";

// Import all local images
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

export default function Home() {
  return (
    <div className="mb-10">
      <Header />
      <HeroBanner />
      <Features />
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
      <Services />
      <About />
      <CallToAction />
      <Step />
      <Value />
      <Testimonial />
      <Clients />
      <CommercialClient />
    </div>
  );
}