"use client";
import React from "react";
import { Container } from "react-bootstrap";
import company_logo from "../../public/assets/logo_yellow.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer_screen py-5">
        <Container>
          <div className="footer py-2 ">
            <div className="company_logo d-flex align-items-center py-3 flex-grow-1">
              <Image src={company_logo} alt="" />
            </div>
            <div className="footer_description  py-3">
              <div className="copy_rights">
                <span>Coducer Technologies &#169; 2023</span>
                <span className="border_left">All Rights Reserved</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
