import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolios/portfolio";
import { Team } from "@/components/team/team";
import { Testimonials } from "@/components/tesimonials/testimonials";
import { WhyUs } from "@/components/why_us/why_us";

export default function Home() {
  return <>
  <Hero />
  <Portfolio />
  <WhyUs />
  <Testimonials />
  <CTA />
  <Team />
  <FAQ />
  </>;
}
