import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import Cricle from "../cricle/Cricle";
import { Col, Container, Row } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Process = () => {
  // AOS.init();
  return (
    <>
      <div
        className="white_screen"
        // data-aos="fade-up" data-aos-delay="200"
      >
        <Container>
          <div className=" process ">
            <div className="side_star">
              <div className="ninjastar">
                <GiStarShuriken />
              </div>
              <div className="ninjaline ms-2"> </div>
            </div>
            <div className="process_title text-center">Our Processes and Outcomes</div>
            <div className="side_star">
              <div className="ninjaline"> </div>
              <div className="ninjastar ms-2">
                <GiStarShuriken />
              </div>
            </div>
          </div>
          <div className="description_process text-center">
            <p>
              {" "}
              Simplify your development process with our adaptable and flexible
              MVP launch program So delivery on time, everytime!
            </p>
          </div>
          <div className="circle_place position-relative">
            <Cricle />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Process;
