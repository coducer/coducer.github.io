import React from "react";
import Image from "next/image";
import Jai from "../../public/assets/jai.jpg";
import Tej from "../../public/assets/tejesh.jpeg";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Team = () => {
  return (
    <div className="section-team" style={{ color: "#28324B" }} id="team">
      <div className="container">
        <div className="row pt-5 d-flex align-items-center">
          <div className="mem-details col-lg-5 text-center">
            <h2 className="hire-title">We`re Hiring</h2>
            <p>Meet our Team of Experts</p>
            <div>
              <button
                className="btn-start p-2 px-4 fw-semibold"
                style={{ color: "#28324B", fontSize: "14px" }}
              >
                Start Now
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="team-mem d-flex mb-5 mt-5 flex-wrap">
              <div className="team-img col-lg-6 d-flex align-items-center">
                <Image src={Jai} alt="user" className="per-1" />
                <div className="ms-2 align-items-center">
                  <p className="mb-0 jai">Jai Keerthi</p>
                  <p className="role">Founder / CEO</p>
                  <span className="github px-1">
                    <AiFillGithub />
                  </span>
                  <a href="https://www.linkedin.com/in/kjaikeerthi/">
                    <span className="linkedin px-1 ps-2">
                      <AiFillLinkedin />
                    </span>
                  </a>
                </div>
              </div>

              <div className="team-img col-lg-6 d-flex align-items-center">
                <Image src={Tej} alt="user" className="per-1" />
                <div className="ms-2 align-items-center">
                  <p className="mb-0 tej">Tejesh</p>
                  <p className="role">Developer</p>
                  <span className="github px-1">
                    <AiFillGithub />
                  </span>
                  <a href="https://www.linkedin.com/in/tejeshpichandi/">
                    <span className="linkedin px-1 ps-2">
                      <AiFillLinkedin />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
