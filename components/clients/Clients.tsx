import React from "react";
import cl2 from "../../public/assets/trew.png";
import cl4 from "../../public/assets/alar.png";
import cl5 from "../../public/assets/ihx.png";
// import impactree from "../../public/assets/impactreelogo.png"
import { Container } from "react-bootstrap";
import Image from "next/image";
import ihx from '../../public/assets/client logos/IHX.svg'
import impactree from '../../public/assets/client logos/Impactree.png'
import Al from '../../public/assets/client logos/AlArabia.png'
import abg from '../../public/assets/client logos/ABG.png'
import jofin from '../../public/assets/client logos/Jofin.png'
import trew from '../../public/assets/client logos/TREW.png'

const Clients = () => {
  return (
    <>
      <div className="clients_screen">
        <Container>
          <div className="process_title_clients text-center py-3">We are Working with</div>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <Image src={ihx} alt="" />
              </div>
              <div className="slide">
                <Image src={impactree} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={Al} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={trew} alt="" />
              </div>
              <div className="slide">
                <Image src={jofin} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={abg} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={Al} alt="" />
              </div>
              <div className="slide">
                <Image src={impactree} alt="" />
              </div>
              <div className="slide">
                <Image src={trew} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={abg} alt="" />
              </div>
              <div className="slide me-3">
                <Image src={ihx} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clients;
