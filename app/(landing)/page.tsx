'use client'
// import { FAQ } from "@/components/faq/faq";
// import { Footer } from "@/components/footer/footer";
// import { Hero } from "@/components/landing/hero";
// import { Pricing } from "@/components/pricing/pricing";
// import { Team } from "@/components/team/team";
// import { WhyUs } from "@/components/why_us/why_us";
// import Work from "@/components/work/work";
// import { Circle } from "@/components/process/circle";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Process from "../../components/processAndtesting/Process";
import Details from "../../components/details/Details";
import Work from "../../components/latestWork/Work";
import Testimonial from "../../components/testimonial/Testimonial";
import Clients from "../../components/clients/Clients";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team"
import Faq from "../../components/faq/Faq"

export default function Home() {
  return (
    <>
          <Navbar />
      <Header />
      {/* <Process /> */}
      {/* <Cricle /> */}
      <Details />
      <Work />
      <Testimonial />
      <Team />
      <Clients />
      <Faq />
      {/* <MvpBlog /> */}
      {/* <Scoping /> */}
      {/* <MvpProcess /> */}
      <Footer />
    </>
  );
}
