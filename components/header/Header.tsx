"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Rocket from "../../public/assets/bg_startup.png";
import { Sora } from "next/font/google";

const Header = () => {
  return (
    <>
      <div className="section-head pt-lg-5" id="hero">
        <Container className="h-100">
          <div className=" d-flex align-items-center h-100">
            <div className="row">
              <div className="hero-head col-lg-6 text-white my-auto">
                <div className="inner-headings">
                  <h2 className="builder d-inline-block me-3 mb-0">
                    Build your
                  </h2>
                  <span className="text-wrapper">
                    <pre>
                      Web Development <br />
                      Rapid Prototyping
                      <br />
                      AI/ML Models
                      <br />
                      Blockchain
                      <br />
                      Web App
                      <br />
                      DevOps
                      <br />
                    </pre>
                  </span>
                  <br />
                </div>
                <h2 className="day">in 100 days</h2>
                <div className="hero-subhead text-white py-3">
                  <p>
                    Supercharge your journey as a Non-tech SaaS Founder with 100
                    Days of MVP, and build your Product in record time.
                    Collaborate closely with our dynamic team of tech-nerds
                    starting from day -30, to prioritise market-driven features
                    and conquer tech decision-making challenges
                  </p>
                </div>
                <div>
                  <button
                    className="btn-start p-2 px-4 fw-semibold"
                    style={{ color: "#28324B", fontSize: "14px" }}
                  >
                    Start Now
                  </button>
                </div>
              </div>
              <div className="rocket-container col-lg-6 ">
                <Image src={Rocket} alt="rocket" className="hero-rocket" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Header;
