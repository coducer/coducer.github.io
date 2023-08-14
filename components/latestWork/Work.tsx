"use client";
import React from "react";
import mock1 from "../../public/assets/lap5.png";
import mock2 from "../../public/assets/lap2.jpg";
import mock3 from "../../public/assets/jof.png";
import { Container } from "react-bootstrap";
import Image from "next/image";
import ihx from "../../public/assets/works/IHX-1.png";

const Work = () => {
  return (
    <>
      <div className="work_screen " id="work">
        <Container>
          <div>
            <div className="worksandtestimonial">
              <p className="title title-work">A sneak-peek into our work</p>
              <p className="text-center work-sub">
                Quick analysis behind our stellar MVP launches
              </p>
            </div>

            <div className="container">
              <div className="row wrk-sample">
                <div className="content col-lg-4">
                  <a href="https://www.jofin.ai/" target="_blank">
                    <div className="content-overlay"></div>
                    <Image
                      className="content-image working"
                      src={mock3}
                      alt=""
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Jofin</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a
                    href="http://prabhaav-user.coducer.xyz/login"
                    target="_blank"
                  >
                    <div className="content-overlay"></div>
                    <Image
                      className="content-image working"
                      src={mock1}
                      alt=""
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Impactree</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a href="http://20.74.152.254/login" target="_blank">
                    <div className="content-overlay"></div>
                    <Image
                      className="content-image working"
                      src={mock2}
                      alt=""
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Al-Arabia</h3>
                    </div>
                  </a>
                </div>

                {/* <div className="row">
                  <div className="col-md-5">
                    <h2 className="fs-1 fw-bolder pb-3">IHX</h2>
                    <h4 className="fs-4 fw-bold">Al Arabia</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero aliquid maiores ducimus itaque, corporis illo pariatur labore natus nobis voluptatibus eaque dicta minima, doloremque repellendus. Obcaecati ducimus facilis fugiat.</p>
                  </div>
                  <div className="col-md-7">
                    <Image src={ihx} alt="" className="mx-auto"/>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
