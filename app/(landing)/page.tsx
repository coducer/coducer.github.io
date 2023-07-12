'use client'
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/pricing/pricing";
import { Team } from "@/components/team/team";
import { WhyUs } from "@/components/why_us/why_us";
import Work from "@/components/work/work";
import { Circle } from "@/components/process/circle";

export default function Home() {
  return (
    <>
      <Hero />
      <Circle />
      <WhyUs />
      <Work />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
