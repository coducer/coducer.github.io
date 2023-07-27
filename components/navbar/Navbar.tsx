import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Container } from "react-bootstrap";
// import company_logo from "../../assets/favicon.svg";
import company_logo from "../../assets/logo_yellow.svg";
import company_logo_mobile from "../../assets/logo_yellow_mobile.svg";
import company_logo_tab from "../../assets/logo_yellow_tab.svg";
import Image from "next/image";
const Menu = () => {
  return (
    <>
      <ul>
        <li> SERVICES</li>
        <li> PROJECTS</li>
        <li> ABOUT</li>
        <li>
          <span className="contact_btn"> CONTACT US</span>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div className={color ? "nav_border nav_color" : "nav_border"}>
        <Container fluid>
          <div className="navbar">
            <div className="navbar__links">
              <div className="navbar__logo">
                <Image src={company_logo} className="logo"  alt="" />
                <Image src={company_logo_mobile} className="mobile_logo"  alt=""/>
                <Image src={company_logo_tab} className="tab_logo"  alt="" />
              </div>
              <div className="navbar__right">
                <div className="navbar__pages">
                  <Menu />
                </div>
                <div className="navbar__mobile_menu">
                  {toggleMenu ? (
                    <RiCloseLine
                      color="#f4dd4b"
                      className="toggle"
                      onClick={() => setToggleMenu(false)}
                    />
                  ) : (
                    <RiMenu3Line
                      color="#f4dd4b"
                      className="toggle"
                      onClick={() => setToggleMenu(true)}
                    />
                  )}
                  {toggleMenu && (
                    <div className="navbar__mobile_menu_links motion">
                      <div className="navbar__mobile_menu_links_drop">
                        <Menu />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
