"use client";

import Circle from "@/components/circle/Circle";
import Clients from "@/components/clients/Clients";
import Details from "@/components/details/Details";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Work from "@/components/latestWork/Work";
import Navbar from "@/components/navbar/Navbar";
// import Team from "@/components/team/Team";
// import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Circle />
      <Details />
      <Work />
      {/* <Testimonial /> */}
      {/* <Team /> */}
      <Clients />
      <Faq />
      <Footer />
    </>
  );
}
