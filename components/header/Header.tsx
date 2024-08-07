"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Rocket from "../../public/assets/MVP.png";
import { Sora } from "next/font/google";
import Link from "next/link";

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
                      MVP
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
                    We are a dynamic product studio committed to transforming innovative concepts into reality within a 100-day timeframe. Our dedicated team specialises in user-centric design, streamlined development methodologies, and cutting-edge technologies to deliver exceptional solutions tailored to our clients' unique visions and goals.
                  </p>
                </div>
                <div>
                  <Link
                    href={"/contact"}
                    className="btn-start p-2 px-4 fw-semibold text-decoration-none"
                    style={{ color: "#28324B", fontSize: "14px" }}
                  >
                    Start Now
                  </Link>
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
