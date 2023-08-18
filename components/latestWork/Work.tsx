"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Jofin from "../../public/assets/mockups/Jofin (1).png";
import Jfnlgo from "../../public/assets/jfn.png";
import AA from "../../public/assets/mockups/Al Arabia.png";
import Ala from "../../public/assets/Al Arabia.png";
import Carousel from 'react-bootstrap/Carousel';
import Impact from '../../public/assets/impactreelogo.png'
import Impactree from '../../public/assets/mockups/Impactree.png'

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

              <div className="row wrk-sample">
{/* 
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
                </div> */}

                 <Carousel>
                  <Carousel.Item interval={5000} >
                    <div className="row mt-3" style={{ maxHeight:"50vh"}}>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <Image src={Jfnlgo} alt="" />
                            <p className="pb-0 mb-0 pt-5">Jofin</p>
                            <h4 className="fs-1 fw-bold">Jofin</h4>
                            <p>Jofin provides comprehensive personal financial management solutions. Comprising competent financial experts, provides unbiased financial advice right from how to plan, where to invest, which insurance to buy; besides providing additional facilities and features such as e-Tax filing, loans, and digital document locker all within one platform.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Fin Tech</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">South Asia - Bengaluru</p>
                          </div>
                        </div>
                        <a className="link text-decoration-none" href="https://www.jofin.ai/">Learn More &rarr;</a>
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
                            <p>AlArabia has been the leading outdoor solution provider since 1983, offering clients with expertise across a multitude of platforms and disciplines. It has invested in companies across the entire media funnel to ensure quality from inception to delivery.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Ad Tech</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">Middle East - Saudi Arabia</p>
                          </div>
                        </div>
                        <a className="link text-decoration-none" href="https://al-arabia.com/">Learn More &rarr;</a>
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
                            <Image src={Impact} alt="" />
                            <p className="pb-0 mb-0 pt-5">Impactree</p>
                            <h4 className="fs-1 fw-bold">Impactree</h4>
                            <p>A tech company specializing in social impact and sustainability providing products and solutions thet facilitate enterprise growth and value creation throughout their lifecycle, whether by boosting revenue, reducing costs, or expanding their reach.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                          <div className="industry">
                            <h4 className="fs-3 fw-bolder">Industry</h4>
                            <p className="">Data Tech</p>
                          </div>
                          <div className="region ms-5">
                            <h4 className="fs-3 fw-bolder">Region</h4>
                            <p className="">South Asia - Chennai</p>
                          </div>
                        </div>
                        <a className="link text-decoration-none" href="https://www.impactree.ai/">Learn More &rarr;</a>
                      </div>

                      <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <Image src={Impactree} alt="" className="mx-auto" />
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
