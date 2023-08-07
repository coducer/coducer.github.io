'use client'
import React from "react";
import { Container } from "react-bootstrap";
import company_logo from "../../public/assets/logo_yellow.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer_screen">
      <Container>
        <div className="footer py-2">
          <div className="company_logo d-flex align-items-center">
            <Image src={company_logo} alt="" />
          </div>
          <div className="footer_description">
            <div className="copy_rights">
              <span>Coducer Technologies &#169; 2023</span>
              <span className="border_left">All Rights Reserved</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
