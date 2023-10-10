import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <iframe
        style={{ height: "100vh", width: "100%", border: "none", background: 'white' }}
        src="https://forms.zohopublic.in/coducertechnologiesprivatelimi/form/ContactUs/formperma/fzoQGIFg91cVCzcTT0ui4LwK1TqYvMX_Z9cNIJGQr1Y"
      ></iframe>
      <Footer />
    </>
  );
};

export default page;
