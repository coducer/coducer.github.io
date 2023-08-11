import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Ihx from '../../public/assets/B&W logos/IHX.png'
import impactree from '../../public/assets/B&W logos/Impactree.png'
import Al from '../../public/assets/B&W logos/AlArabia.png'
import Abg from '../../public/assets/B&W logos/ABG.png'
import Jofin from '../../public/assets/B&W logos/jn.png'
import Trew from '../../public/assets/B&W logos/TREW.png'

const Clients = () => {

  // var copy = document.querySelector('.slide-track')?.cloneNode(true)
  // document.querySelector('.slider')?.appendChild(copy);

  return (
    <>
      <div className="clients_screen">
        <Container>
          <div className="process_title_clients text-center py-3">We are Working with</div>
          
          
          <div className="slider logos">
            <div className="slide-track logos-slide">
              <div className="slide">
                <Image src={Ihx} alt="" />
              </div>
              <div className="slide"> 
                <Image src={impactree} alt="" />
              </div>
              <div className="slide">
                <Image src={Al} alt="" />
              </div>
              <div className="slide">
                <Image src={Trew} alt="" />
              </div>
              <div className="slide">
                <Image src={Jofin} alt="" />
              </div>
              <div className="slide">
                <Image src={Abg} alt="" />
              </div>

              <div className="slide">
                <Image src={Ihx} alt="" />
              </div>
              <div className="slide"> 
                <Image src={impactree} alt="" />
              </div>
              <div className="slide">
                <Image src={Al} alt="" />
              </div>
              <div className="slide">
                <Image src={Trew} alt="" />
              </div>
              <div className="slide">
                <Image src={Jofin} alt="" />
              </div>
              <div className="slide">
                <Image src={Abg} alt="" />
              </div>
                    </div>
          </div>

          <script>

          </script>
        </Container>
      </div>
    </>
  );
};

export default Clients;
