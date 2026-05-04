import Link from "next/link";


import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';
import Programs from './components/programs/programs';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import CTA from './components/cta/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Programs />
      <Portfolio />
      <Testimonial />
      <CTA />
    </main>
  );
}