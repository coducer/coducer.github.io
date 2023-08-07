import React from "react";
import cl2 from "../../public/assets/trew.png";
import cl4 from "../../public/assets/alar.png";
import cl5 from "../../public/assets/ihx.png";
import impactree from "../../public/assets/impactreelogo.png"
import { Container } from "react-bootstrap";
import Image from "next/image";
const Clients = () => {
  return (
    <>
      <div className="clients_screen">
        <Container>
          <div className="process_title_clients text-center py-3">We are Working with</div>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <Image src={cl2} height="100" width="250" alt="" />
              </div>
              <div className="slide">
                <Image src={impactree} width="100" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl4} height="100" width="150" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl5} height="50" width="150" alt="" />
              </div>
              <div className="slide">
                <Image src={cl2} height="100" width="250" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl4} height="100" width="150" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl5} height="50" width="150" alt="" />
              </div>
              <div className="slide">
                <Image src={impactree} width="100" alt="" />
              </div>
              <div className="slide">
                <Image src={cl2} height="100" width="250" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl4} height="100" width="150" alt="" />
              </div>
              <div className="slide me-3">
                <Image src={cl5} height="50" width="150" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clients;
