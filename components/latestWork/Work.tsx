'use client'
import React from "react";
import mock1 from "../../public/assets/lap5.png"
import mock2 from "../../public/assets/lap2.jpg"
import mock3 from "../../public/assets/jof.png"
import { Container } from "react-bootstrap";
import Image from "next/image";
import Jofin from "../../public/assets/mockups/jj.png";
import Jfnlgo from "../../public/assets/jfn.png";
import AA from "../../public/assets/mockups/Al Arabia.png";
import Ihx from "../../public/assets/mockups/IHX-1.png"
import Ala from "../../public/assets/Al Arabia.png";
import Carousel from 'react-bootstrap/Carousel';

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

              <div className="row wrk-sample">

                <div className="content col-lg-4">
                  <a href="https://www.jofin.ai/" target="_blank">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock3} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Jofin</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a href="http://prabhaav-user.coducer.xyz/login" target="_blank">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock1} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Impactree</h3>
                    </div>
                  </a>
                </div>

                <div className="content col-lg-4">
                  <a href="http://20.74.152.254/login" target="_blank">
                    <div className="content-overlay"></div>
                    <Image className="content-image workimg" src={mock2} alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Al-Arabia</h3>
                    </div>
                  </a>
                </div>

                 {/* <Carousel>
                  <Carousel.Item interval={5000} >
                    <div className="row mt-3" style={{ maxHeight:"50vh"}}>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <Image src={Jfnlgo} alt="" />
                            <p className="pb-0 mb-0 pt-5">Jofin</p>
                            <h4 className="fs-1 fw-bold">Jofin</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero aliquid maiores ducimus itaque, corporis illo pariatur labore natus nobis voluptatibus eaque dicta minima, doloremque repellendus. Obcaecati ducimus facilis fugiat.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                        </div>
                        <a href="https://www.jofin.ai/">Learn More &rarr;</a>
                      </div>

                      <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <Image src={Jofin} alt="" className="mx-auto" />
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <div className="row mt-3" style={{ maxHeight:"50vh"}}>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <Image src={Ala} alt="" />
                            <p className="pb-0 mb-0 pt-5">Alarabia</p>
                            <h4 className="fs-1 fw-bold">Alarabia</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero aliquid maiores ducimus itaque, corporis illo pariatur labore natus nobis voluptatibus eaque dicta minima, doloremque repellendus. Obcaecati ducimus facilis fugiat.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                        </div>
                        <a href="https://al-arabia.com/">Learn More &rarr;</a>
                      </div>

                      <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <Image src={AA} alt="" className="mx-auto" />
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item interval={5000}>
                    <div className="row mt-3" style={{ maxHeight:"50vh"}}>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <Image src={Jfnlgo} alt="" />
                            <p className="pb-0 mb-0 pt-5">Jofin</p>
                            <h4 className="fs-1 fw-bold">Jofin</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero aliquid maiores ducimus itaque, corporis illo pariatur labore natus nobis voluptatibus eaque dicta minima, doloremque repellendus. Obcaecati ducimus facilis fugiat.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">Lorem ipsum dolor sit.</p>
                          </div>
                        </div>
                        <p>Learn More &rarr;</p>
                      </div>

                      <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <Image src={Ihx} alt="" className="mx-auto" />
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
