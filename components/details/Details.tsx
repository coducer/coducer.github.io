import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import iconss from "../../public/assets/detailsicon.svg";
import { BiTimer } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'
import { GiProcessor } from 'react-icons/gi'
import { GiExpand } from 'react-icons/gi'
import { MdOutlineContactSupport } from 'react-icons/md'
import { RiOpenSourceLine } from 'react-icons/ri'

const Icon = () => {
  return (
    <>
      <div className="details_icon">
        <div className="content">
          {/* <Image src={iconss} alt="man-icon" className="details_icon_logo" /> */}
        </div>
      </div>
    </>
  );
};

const Details = () => {
  return (
    <>
      <div className="black_screen" id="whyus">
        <Container>
          <div className="pb-5">
            <div className="whyus_title_details text-center">Why choose 100 days of MVP?</div>
            <div className="description_process_details text-center ">
              <p >
                {" "}
                Join forces with 100 Days of MVP to confidently navigate the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-bi"><BiTimer /></span>
              <div className="processes">Time</div>
              <div className="time-cnt">We are with you every step of the way, starting from day -30, assisting you with requirements, proposals, detailed analysis, timeframes and most of all in defining the core MVP features.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-ai"><AiOutlineTeam /></span>
              <div className="processes">Team</div>
              <div className="team-cnt">You get to collaborate with experienced tech entrepreneurs, project managers, designers, and test engineers who would help you shape your idea into a minimum viable and loveable product. </div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-gi"><GiProcessor /></span>
              <div className="processes">Process</div>
              <div className="process-cnt">Our extensive process is proven and exclusively crafted for the founders building their MVPs. Our comprehensive tech assistance ensures you to succeed and navigate the tech complexities.
            </div>
            </div>
          </div>

          <div className="row ">
          <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-bi"><GiExpand /></span>
              <div className="processes">Scale</div>
              <div className="scale-cnt">We help you accelerate your growth rate by scaling your tech capabilities like handling customer requests, enhancing resources, infrastructure & effectively managing increased workloads.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-ai"><MdOutlineContactSupport /></span>
              <div className="processes">Support</div>
              <div className="support-cnt">As your extended tech arm, we offer support for tech related decision-making, interactions with the investors or customers and serve as your knowledge partner for tech related resources.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-gi"><RiOpenSourceLine /></span>
              <div className="processes">Opensource</div>
              <div className="open-cnt">Open Source helps speed up development, foster collaboration & customise based on requirements, ensuring each product is distinctive, while proprietary tools are utilised when necessary.</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Details;
