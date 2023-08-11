'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Rocket from "../../public/assets/bg_startup.png"
import { Sora } from 'next/font/google';

const Header = () => {
  return (
    <>
      <div className="section-head" id="hero">
        <Container className="h-100">
          <div className=" d-flex align-items-center h-100">
            <div className="row">
              <div className="hero-head col-md-6 text-white my-auto">
                  <div className="inner-headings">
                   <h2 className="builder d-inline-block me-3 mb-0">Build your</h2>
                  <span className="text-wrapper">
                    <pre>
                      Web Development <br/>
                      Rapid Prototyping<br/>
                      AI/ML Models<br/>
                      Blockchain<br/>
                      Web App<br/>
                      DevOps<br/>
                      </pre>
                  </span>
                  <br />
                  
                </div>
                  <h2 className="day">in 100 days</h2>
                <div className="hero-subhead text-white py-3">
                  <p>We help founders in Fintech and SaaS create an MVP in 100 days. As your dedicated tech partner, we guide you from ideation to development, offering essential tech support until you secure a CTO and dev team. Count on us for reliable long-term support.</p>
                </div>
                <div>
                  <button className="btn-start p-2 px-4 fw-semibold" style={{ color: "#28324B", fontSize: "14px" }}>Start Now</button>
                </div>
              </div>
              <div className="rocket-container col-md-6 mx-auto">
                <Image src={Rocket} alt="rocket" className="hero-rocket" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Header
