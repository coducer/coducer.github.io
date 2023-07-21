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
const API_BASE_URL =  process.env.BASE_URL || 'http://157.245.96.35:1337';

export default async function Home() {
  const homeres = await fetch(`${API_BASE_URL}/api/heros`);
  const process = await fetch(`${API_BASE_URL}/api/processes`);
  const whyus = await fetch(`${API_BASE_URL}/api/why-uses`);
  const team = await fetch(`${API_BASE_URL}/api/teams`);
  const work = await fetch(`${API_BASE_URL}/api/works?populate=*`);
  const testimonial = await fetch(`${API_BASE_URL}/api/contents?populate=*`);
  const faq = await fetch(`${API_BASE_URL}/api/faqs`);

  let homedata = await homeres.json();  
  let processdata = await process.json();
  let whyusdata = await whyus.json();
  let teamdata = await team.json();
  let workdata = await work.json();
  let testimonialdata = await testimonial.json();
  let faqdata = await faq.json();

  console.info(testimonial)

  const data = {...homedata,...processdata,...whyusdata,...teamdata,...workdata,...testimonialdata,...faqdata}
  return (
    <>
      <Hero homedata={homedata} />
      <Circle processdata={processdata} />
      <WhyUs whyusdata={whyusdata} />
      <Work workdata={workdata}/> 
      <Testimonials testimonialdata={testimonialdata}/>
      {/* <Pricing /> */}
      <Team teamdata={teamdata}/>
      <FAQ faqdata={faqdata}/> 
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