"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Jofin from "../../public/assets/mockups/Jofin (1).png";
import Jfnlgo from "../../public/assets/Jofin_48.png";
import AA from "../../public/assets/mockups/Al Arabia.png";
import Ala from "../../public/assets/Al Arabia 48px.png";
import Carousel from 'react-bootstrap/Carousel';
import Impact from '../../public/assets/Impactree_48.png'
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
              <Carousel>

                <Carousel.Item interval={5000}>
                  <div className="row mt-3 mb-3">
                    <div className="col-lg-5 col-sm-6">
                      <Image src={Jfnlgo} alt="" className="mb-5" />
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Project Requirement</h4>
                          <p>Build an Insurance module​.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Team size:</h4>
                          <span>Project Manager - 1</span><br />
                          <span>Developer - 4</span><br />
                          <span>Design - 1</span><br />
                          <span>QA - 1</span>
                        </div>
                      </div>

                      <div className="row pt-4">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Outcome :</h4>
                          <p>Successful launch on-time</p>
                          <p>Team continu​e to support roadmap</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Duration :</h4>
                          <p>100 Days</p>
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
                      <div className="mb-3">
                        <a className="link text-decoration-none" href="https://www.jofin.ai/">Learn More &rarr;</a>
                      </div>
                    </div>

                    <div className="col-lg-7 col-sm-6 d-flex justify-content-center align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <Image src={Jofin} alt="" className="mx-auto screenshot" />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                  <div className="row mt-3">
                    <div className="col-lg-5 col-sm-6">
                      <Image src={Ala} alt="" className="mb-5" />
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Project requirement</h4>
                          <p>Build a responsive web & mobile app</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Team size:</h4>
                          <span>Project Manager - 1</span><br />
                          <span>Developer - 4</span><br />
                          <span>Design - 1</span><br />
                          <span>QA - 1</span>
                        </div>
                      </div>

                      <div className="row pt-4">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Outcome</h4>
                          <p>Successful launch on-time</p>
                          <p>Team continu​e to support roadmap</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Duration :</h4>
                          <p>100 Days</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center pt-5">
                        <div className="industry">
                          <h4 className="fs-3 fw-bolder">Industry</h4>
                          <p className="">AdTech</p>
                        </div>
                        <div className="region ms-5">
                          <h4 className="fs-3 fw-bolder">Region</h4>
                          <p className="">Middle East - Saudi Arabia</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <a className="link text-decoration-none" href="https://al-arabia.com/">Learn More &rarr;</a>
                      </div>
                    </div>

                    <div className="col-lg-7 col-sm-6 d-flex justify-content-center align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <Image src={AA} alt="" className="mx-auto screenshot" />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                  <div className="row mt-3">
                    <div className="col-lg-5 col-sm-6">
                      <Image src={Impact} alt="" className="mb-5" />
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Project requirement</h4>
                          <p>Build an responsive web app</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Team size:</h4>
                          <span>Project Manager - 1</span><br />
                          <span>Developer - 4</span><br />
                          <span>Design - 1</span><br />
                          <span>QA - 1</span>
                        </div>
                      </div>

                      <div className="row pt-4">
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Outcome</h4>
                          <p>Successful launch on-time</p>
                          <p>Team continu​e to support roadmap</p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <h4 className="fs-5 fw-bold">Duration :</h4>
                          <p>100 Days</p>
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

                      <div className="mb-3">
                        <a className="link text-decoration-none" href="https://www.impactree.ai/">Learn More &rarr;</a>
                      </div>
                    </div>

                    <div className="col-lg-7 col-sm-6 d-flex justify-content-center align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <Image src={Impactree} alt="" className="mx-auto screenshot" />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container >
      </div >
    </>
  );
};

export default Work;
