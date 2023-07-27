import React from "react";
import { Container } from "react-bootstrap";
import company_logo from "../../assets/logo_yellow.svg";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import twitter_tab from "../../assets/Twitter.svg";
import lin_tab from "../../assets/Linkedin.svg";
import insta_tab from "../../assets/Instagram.svg";
const Footer = () => {
  return (
    <>
      <div className="footer_screen">
        <Container>
          {/* <div className="footer">
            <div className="company_logo">
            <Image src={company_logo} alt="" />
            <div className="media">
             
              <div className="media_icons">
                <BsFacebook />
              </div>
              <div className="media_icons">
                <BsTwitter />
              </div>
              <div className="media_icons">
                <BsLinkedin />
              </div>
            </div>
            </div>
            <div className="footer_side">
              <div className="footer_things">
                <div className="sub_heading">COMPANY</div>
                <div className="sub_heading">ACCOUNT</div>
                <div className="sub_heading">TREMS OF SERVICE</div>
                <div className="sub_heading">PRIVACY POLICY</div>
              </div>
              <div className="footer_things">
                <div className="sub_heading">FAQ</div>
                <div className="sub_heading">HELP</div>
             
              </div>
              <div className="footer_things">
                <div className="sub_heading">ABOUT</div>
              </div>
              <div className="footer_things">
                <div className="sub_heading">CONTACT US</div>
              </div>
            </div>
          </div> */}
          <div className="footer row">
            <div className="company_logo col-md-5 col-sm-12 col-lg-5">
              <Image src={company_logo} alt="" />
              <div className="footer_description">
                <p>
                  100 days of MVP Achieve your business objectives in 100 days
                  with our expert MVP launch program
                </p>
              </div>
            </div>
            <div className="footer_side col-md-7 col-sm-12 col-lg-7">
              <div className="footer_things">
                <div className="footer_title">Useful Links</div>
                <div className="sub_heading"> Contact US</div>
                <div className="sub_heading"> Official Pages</div>
                <div className="sub_heading">Frequently Asked Question</div>
                <div className="sub_heading"> Privacy & Policy</div>
                <div className="sub_heading"> Terms & Condition</div>
              </div>
              <div className="footer_things">
                <div className="footer_title">Features</div>
                <div className="sub_heading"> Home</div>
                <div className="sub_heading"> Process</div>
                <div className="sub_heading"> Service</div>
                <div className="sub_heading"> Work</div>
                <div className="sub_heading"> Clients</div>
              </div>
              <div className="footer_things">
                <div className="footer_title">Social Media</div>
                {/* <div className="media">
                  <div className="media_icons">
                    <GrGoogle />
                  </div>
                  <div className="media_icons">
                    <BsFacebook />
                  </div>
                  <div className="media_icons">
                    <BsTwitter />
                  </div>
                  <div className="media_icons">
                    <BsLinkedin />
                  </div>
                </div> */}
                <span className="media ">
                  <span>
                    <a href="https://twitter.com/100daysofmvp">
                      <Image src={twitter_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/100daysofmvp/">
                      <Image src={insta_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.linkedin.com/in/hundred-days-of-mvp-2a4492263/">
                      <Image src={lin_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="copy_rights">
            <span>Coducer &#169; 2022</span>
            <span className="border_left">All Rights Reserved</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
