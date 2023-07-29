import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCircleFill, BsHexagon } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import { TbFileSpreadsheet } from "react-icons/tb";
import hex from "../../public/assets/hex.svg";
import iconss from "../../public/assets/detailsicon.svg";
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
          <Image src={iconss} alt="man-icon" className="details_icon_logo" />
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
            <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-bi"><BiTimer /></span>
              <div className="processes">Time</div>
              <div>We are with you every step of the way, starting from day -30, assisting you with requirements, proposals, detailed analysis, timeframes, and most of all in defining the core MVP features.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-ai"><AiOutlineTeam /></span>
              <div className="processes">Team</div>
              <div>Collaborate with experienced tech entrepreneurs, backed by project managers, designers, and test engineers who support your vision.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-gi"><GiProcessor /></span>
              <div className="processes">Process</div>
              <div>Our process is a proven and customised approach designed specifically for Non-tech SaaS founders. We offer comprehensive tech assistance to ensure your success in navigating the complexities in tech world.
            </div>
            </div>
          </div>

          <div className="row ">
          <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-bi"><GiExpand /></span>
              <div className="processes">Scale</div>
              <div>We help you accelerate your growth rate by scaling up your tech capabilities like handling customer requests, enhancing resources & infrastructure and effectively managing increased workloads.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-ai"><MdOutlineContactSupport /></span>
              <div className="processes">Support</div>
              <div>As your tech arm, we support decision-making, interactions with investors/customers, and serve as your knowledge partner for product and tech related resources.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-3">
              <span className="icon-gi"><RiOpenSourceLine /></span>
              <div className="processes">Opensource</div>
              <div>Open Source empowers us to customise tools based on unique requirements, ensuring each product is distinctive, while Proprietary Tools are utilised when necessary.</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Details;
