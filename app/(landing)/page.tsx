import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/pricing/pricing";
import { Team } from "@/components/team/team";
import { WhyUs } from "@/components/why_us/why_us";
import { Circle } from "@/components/process/circle";
import { Testimonials } from "@/components/tesimonials/testimonials";
import { Work } from "@/components/work/work"
import { Case } from "@/components/casestudy/case";
import { Blog } from "@/components/blog/blog"
const API_BASE_URL =  process.env.BASE_URL || 'http://localhost:1337';

export default async function Home() {
  const homeres = await fetch(`${API_BASE_URL}/api/heros`);
  const process = await fetch(`${API_BASE_URL}/api/processes`);
  const whyus = await fetch(`${API_BASE_URL}/api/why-uses`);


  let homedata = await homeres.json();  
  let processsection = await process.json();
  let why_us = await whyus.json();
  // console.info("what we do")

  console.info(why_us)

  const data = {...homedata, ...processsection,...why_us}
  return (
    <>
      <Hero homedata={homedata} />
      <Circle processsection={processsection} />
      <WhyUs whyus={why_us} />
      <Work />
      <Testimonials />
      {/* <Pricing /> */}
      <Team />
      <FAQ /> 
      {/* <Blog /> */}
      {/* <Case /> */}
      <Footer />

    </>
  );
}
// export async function getServerSideProps() {
  
//   return {
//     props: {...homedata},
//   };
//   }