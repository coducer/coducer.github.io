'use client'
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/pricing/pricing";
import { Team } from "@/components/team/team";
import { WhyUs } from "@/components/why_us/why_us";
import { Circle } from "@/components/process/circle";
import { Testimonials } from "@/components/tesimonials/testimonials";
import { Work } from "@/components/work/work"

export default function Home() {
  return (
    <>
      <Hero />
      <Circle />
      <WhyUs />
      <Work />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}