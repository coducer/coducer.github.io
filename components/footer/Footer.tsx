import React from "react";
import { Container } from "react-bootstrap";
import company_logo from "../../public/assets/logo_yellow.svg";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import twitter_tab from "../../public/assets/Twitter.svg";
import lin_tab from "../../public/assets/Linkedin.svg";
import insta_tab from "../../public/assets/Instagram.svg";
const Footer = () => {
  return (
    <>
      <div className="footer_screen">
        <Container>
          <div className="footer py-5">
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
    </>
  );
};

export default Footer;
