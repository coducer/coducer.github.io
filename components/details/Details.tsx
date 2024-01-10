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
              <div className="time-cnt">We accompany you from day -30, guiding you through requirements, proposals, detailed analysis, timeframes, and crucially, defining core MVP features.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-ai"><AiOutlineTeam /></span>
              <div className="processes">Team</div>
              <div className="team-cnt">Collaborate with experienced tech entrepreneurs, project managers, designers, and engineers to shape your idea into a product.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-gi"><GiProcessor /></span>
              <div className="processes">Process</div>
              <div className="process-cnt">Our proven process offers comprehensive tech assistance, guiding you to success through intricate technical landscapes.</div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-bi"><GiExpand /></span>
              <div className="processes">Scale</div>
              <div className="scale-cnt">We accelerate your growth by scaling tech capabilities, enhancing resources, infrastructure, and efficiently managing increased workloads.</div>
            </div>

            <div className="col-lg-4 col-12 text-white text-center my-5">
              <span className="icon-ai"><MdOutlineContactSupport /></span>
              <div className="processes">Support</div>
              <div className="support-cnt">As your tech partner, we support decision-making, engage with investors or customers, and serve as a knowledge resource for tech-related needs.</div>
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
