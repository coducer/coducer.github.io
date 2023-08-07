'use client'
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Details from "../../components/details/Details";
import Work from "../../components/latestWork/Work";
import Testimonial from "../../components/testimonial/Testimonial";
import Clients from "../../components/clients/Clients";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team"
import Faq from "../../components/faq/Faq"
import Circle from "../../components/cricle/Cricle"
import Structure from "../../components/blogstructure/structure";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Circle />
      <Details />
      <Work />
      <Testimonial />
      <Team />
      <Clients />
      <Faq />
      <Footer />
    </>
  );
}
