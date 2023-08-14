"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import company_logo1 from "../../public/assets/MVP Logo (1).png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="nav-exten">
        <Container>
          <nav className="navbar navbar-expand-lg d-flex justify-content-between py-4">
            <div>
              <a className="navbar-brand pt-2" href="/">
                <Image
                  src={company_logo1}
                  alt="lgo"
                  className="mvp "
                  id="#hero"
                />
              </a>
            </div>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-white">
                  <a
                    className="nav-item nav-link text-white px-3"
                    href="/#process"
                  >
                    Our Process
                  </a>
                  <a
                    className="nav-item nav-link text-white px-3"
                    href="/#whyus"
                  >
                    Whyus?
                  </a>
                  <a
                    className="nav-item nav-link text-white px-3"
                    href="/#work"
                  >
                    Our Work
                  </a>
                  {/* <a className="nav-item nav-link text-white px-3" href="/#testimonial">Testimonial</a> */}
                  {/* <a className="nav-item nav-link text-white px-3" href="/#team">Team</a> */}
                  <a className="nav-item nav-link text-white px-3" href="/#faq">
                    FAQ
                  </a>
                  <a
                    className="nav-item nav-link text-white ps-3 pe-5"
                    href="/blogs"
                  >
                    Blogs
                  </a>
                  <div>
                    <button
                      className="btn-start p-2 px-4 fw-semibold"
                      style={{ color: "#28324B", fontSize: "14px" }}
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
