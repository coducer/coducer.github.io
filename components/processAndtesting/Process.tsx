"use client";
import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import Cricle from "../circle/Circle";
import { Col, Container, Row } from "react-bootstrap";

const Process = () => {
  return (
    <>
      <div>
        <Container>
          <div className="process">
            <div className="process_title text-center px-auto">
              Our Processes and Outcomes
            </div>
          </div>
          <div className="description_process text-center">
            <p>
              {" "}
              Simplify your development process with our adaptable and flexible
              MVP launch program So delivery on time, everytime!
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Process;
