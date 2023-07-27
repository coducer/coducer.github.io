import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCircleFill, BsHexagon } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import { TbFileSpreadsheet } from "react-icons/tb";
import hex from "../../assets/hex.svg";
import iconss from "../../assets/detailsicon.svg";

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
      <div className="black_screen" id="section2">
        <Container>
          <div className=" details ">
            <div className="side_star">
              <div className="ninjastar_details">
                <GiStarShuriken />
              </div>
              <div className="ninjaline_details ms-2"> </div>
            </div>
            <div className="process_title_details">Why Choose Us</div>
            <div className="side_star">
              <div className="ninjaline_details"> </div>
              <div className="ninjastar_details ms-2">
                <GiStarShuriken />
              </div>
            </div>
          </div>
          <div className="description_process_details text-center ">
            <p >
              {" "}
              Consider us for our proven track record of successfully launching
              MVPs in 100 days, our adaptable and flexible
              approach, and our team of experts who
              are dedicated to turning your ideas into reality and being a part
              of your success story.
            </p>
          </div>
          <div className="details_6_box">
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
                {/* <Icon /> */}
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> Time </div>
                <div className="details_box_description">
                  <p className="text-justif">
                    We understand the importance of launcing products on time,
                    so we work closely with our clients to ensure that the final
                    product is delivered on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> Methodology</div>
                <div className="details_box_description">
                  <p>
                    Rapid prototyping for quick design improvement and
                    stakeholder buy-in.
                  </p>
                </div>
              </div>
            </div>
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> People</div>
                <div className="details_box_description">
                  <p>
                    Lead by experienced entrepreneurs, our team brings a wealth
                    of knowledge and passion to every project.
                  </p>
                </div>
              </div>
            </div>
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> Team</div>
                <div className="details_box_description">
                  <p> Lorem ipsum dolor sit amet </p>
                  <p>Perferendis mollitia fugit aliquam, atque</p>
                </div>
              </div>
            </div>
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> Lorem ipsum dolor</div>
                <div className="details_box_description">
                  <p> Lorem ipsum dolor sit amet </p>
                  <p>Perferendis mollitia fugit aliquam, atque</p>
                </div>
              </div>
            </div>
            <div className="details_box">
              <div className="box_logo">
                <Image src={hex} alt="" />
              </div>
              <div className="details_branding_box">
                <div className="details_box_title"> Lorem ipsum dolor</div>
                <div className="details_box_description">
                  <p> Lorem ipsum dolor sit amet </p>
                  <p>Perferendis mollitia fugit aliquam, atque</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Details;
