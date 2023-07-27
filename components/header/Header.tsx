import React from "react";
import { BsHexagon } from "react-icons/bs";
import { Container } from "react-bootstrap";
import bg from "../../assets/bg2.jpg";
import twitter from "../../assets/Twitter.svg";
import lin from "../../assets/Linkedin.svg";
import insta from "../../assets/Instagram.svg";
import twitter_tab from "../../assets/Twitter_tab.svg";
import lin_tab from "../../assets/Linkedin_tab.svg";
import insta_tab from "../../assets/Instagram_tab.svg";
import twitter_mobile from "../../assets/Twitter_mobile.svg";
import lin_mobile from "../../assets/Linkedin_mobile.svg";
import insta_mobile from "../../assets/Instagram_mobile.svg";
import Mouse from "../mouse/Mouse";
import tw1 from "../../assets/Twitter_svg.svg";
import li1 from "../../assets/Linkedin_svg.svg";
import in1 from "../../assets/Instagram_svg.svg";
import Image from "next/image";
const Header = ({ data }: any) => {
  let [over, setOver] = React.useState(false);

  let iconstyle = {
    backgroundColor: "",
  };

  if (over) {
    iconstyle.backgroundColor = "#f4dd4b";
  } else {
    iconstyle.backgroundColor = "";
  }

  // <div className="App">
  //   <button
  //     style={iconstyle}
  //     onMouseOver={() => setOver(true)}
  //     onMouseOut={() => setOver(false)}
  //   >
  //     Hover over me!
  //   </button>
  // </div>;

  const Hexicon = ({ className }: any) => {
    return (
      <>
        <div className={className}>
          <span>
            <div>
              <a href="https://twitter.com/100daysofmvp">
                <Image src={twitter} alt="" />
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/100daysofmvp/">
                <Image src={insta} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/hundred-days-of-mvp-2a4492263/">
                <Image src={lin} alt="" />
              </a>
            </div>
          </span>
        </div>
      </>
    );
  };
  const Icon = ({ className }: any) => {
    return (
      <>
        <div className={className}>
          <div className="details_icon">
            <div className="content">
              <Image src={tw1} alt="man-icon" className="details_icon_logo" />
            </div>
          </div>
          <div className="details_icon">
            <div className="content">
              <Image src={li1} alt="man-icon" className="details_icon_logo" />
            </div>
          </div>
          <div className="details_icon">
            <div className="content">
              <Image src={in1} alt="man-icon" className="details_icon_logo" />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="gradient__bg ">
        {/* <div className="bg">
          <Image src={bg} alt="" />
        </div> */}
        <div className="color-overlay">
          <Container fluid>
            <div className="header_padding_for_icons">
              <div className="header_section">
                <div className="media_align ">
                  <div className=" middle_items ">
                    <div className="title center ">Make your </div>
                    <div className="title "> Proposal to Operational!</div>
                    <div className=" description">
                      {/* <p>
                        Empowering businesses with cutting-edge technology
                        solutions{" "}
                      </p> */}
                      {/* <p className="">
                        team built by go-getter for entrepreneurs which is
                        getting better everyday.
                      </p> */}
                      <p>
                      Unleash the full potential of your business with our 100 Days of MVP program - 
                      </p>
                      <p>
                      fully functional solutions with cutting-edge technologies delivered in just 100 days

                      </p>
                    </div>
                    <div className="getstart_button">
                      <div className="getstart">
                        <a href="#section2" className=" text-decoration-none ">
                          GET STARTED
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="media_ico_mobile ">
                  <span>
                    <Image
                      src={twitter_mobile}
                      alt=""
                      className="img_hover_mobile"
                    />
                  </span>
                  <span>
                    <Image
                      src={insta_mobile}
                      alt=""
                      className="img_hover_mobile"
                    />
                  </span>
                  <span>
                    <Image
                      src={lin_mobile}
                      alt=""
                      className="img_hover_mobile"
                    />
                  </span>
                </span>
                <span className="media_ico_tab ">
                  <span>
                    <a href="https://twitter.com/100daysofmvp">
                      <Image src={twitter_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/100daysofmvp/">
                      <Image src={insta_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.linkedin.com/in/hundred-days-of-mvp-2a4492263/">
                      <Image src={lin_tab} alt="" className="img_hover" />
                    </a>
                  </span>
                </span>
                {/* <div>
                  <Twitter  />
                </div> */}
                <Hexicon className="media_ico " />
                {/* <Icon className="media_ico " /> */}
                <Mouse className="scroller" />
              </div>
            </div>

            {/* <div className="login-box">
              <div>
                <div className="hex1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
