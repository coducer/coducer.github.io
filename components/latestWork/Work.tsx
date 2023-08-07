'use client'
import React from "react";
import mock1 from "../../public/assets/lap5.png"
import mock2 from "../../public/assets/lap2.jpg"
import mock3 from "../../public/assets/lap4.jpg"

import { Container } from "react-bootstrap";
import Image from "next/image";
const Work = () => {
  return (
    <>
      <div className="work_screen " id="work">
        <Container>
          <div>
            <div className="worksandtestimonial">
              <p className="title title-work">A sneak-peek into our work</p>
              <p className="text-center work-sub">Quick analysis behind our stellar MVP launches</p>
            </div>

            <div className="container">
              <div className="row wrk-sample">
                <div className="content col-lg-4">
                  <a href="http://prabhaav-user.coducer.xyz/login">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock1} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Impactree</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a href="http://20.74.152.254/login">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock2} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Al-Arabia</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a href="http://clm.coducer.xyz/login">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock3} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Ihx</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
