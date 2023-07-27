import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import ui1 from "../../assets/giveindia.png";
import ui2 from "../../assets/impactree.jpeg";
import ui3 from "../../assets/ui3.jpg";
import ui4 from "../../assets/ui4.jpg";
import ui5 from "../../assets/ui5.jpg";
import ui6 from "../../assets/ui6.jpg";
import ui7 from "../../assets/ui7.jpg";

import { Container } from "react-bootstrap";
import Image from "next/image";
const Work = () => {
  return (
    <>
      <div className="work_screen">
        <Container>
          <div>
            <div className=" process_work ">
              <div className="side_star">
                <div className="ninjastar_work">
                  <GiStarShuriken />
                </div>
                <div className="ninjaline_work ms-2"> </div>
              </div>
              <div className="process_title_work">Our Latest Works</div>
              <div className="side_star">
                <div className="ninjaline_work"> </div>
                <div className="ninjastar_work ms-2">
                  <GiStarShuriken />
                </div>
              </div>
            </div>
            <div className="description_process_work text-center">
              <p>
                {" "}
                See the latest projects that showcase our expertise and
                dedication to quality.
              </p>
              {/* <p> No one shall be subjected to indepen impartial t</p> */}
            </div>
          </div>

          {/*   ------------- grid blocks -------- */}

          {/* <div classNam="demo-column text-center wow fadeInUp" style={{visibility: "visible" }}>
                        <div className="thumb-container">
                            <img src="https://html.themexriver.com/Archix/demo/assets/images/pages/hm1.png" alt=""/>
                            <div className="thumb-btn-group">
                                <div className="thumb-btns">
                                    <a href="index-1.html" target="_blank">Visit Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-title">
                            <h4><a href="index-1.html" target="_blank">Home 1</a></h4>
                        </div>
                    </div> */}

          {/* <div className="collage">
            <div className="image_box_grid1 image_box  ">
              <div className="position-relative over ">
                <img src={ui1} />
                <div className="project_hover">
                  <div className="bold_letter"> Donation Paltfrom</div>
                  <div className="bold_letter1">NO CODE</div>
                  <a href="" className="link_btn">
                    {" "}
                    VIEW PROJECT{" "}
                  </a>
                </div> 
               </div>
            </div>

            <div className="image_box image_box_grid2  ">
              <div className=" over1">
                <img src={ui2} />
                <div className="project_hover">
                  <div className="bold_letter"> Analytics platfrom</div>S{" "}
                  <div className="bold_letter1">WEB AND MOBILE DEVLOPMENT</div>
                  <a href="#" className="link_btn">
                    {" "}
                    VIEW PROJECT{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="image_box image_box_grid3">
              <div className=" over1">
                <img src={ui2} />
                <div className="project_hover">
                  <div className="bold_letter">
                    {" "}
                    E-commerce . ui/ux . website
                  </div>
                  <div className="bold_letter1">UI UX</div>
                  <a href="" className="link_btn">
                    {" "}
                    VIEW PROJECT{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="image_box image_box_grid4 ">
              <div className=" over">
                <img src={ui1} />
                <div className="project_hover">
                  <div className="bold_letter">
                    {" "}
                    E-commerce . ui/ux . website
                  </div>
                  <div className="bold_letter1">UI UX</div>
                  <a href="#" className="link_btn">
                    {" "}
                    VIEW PROJECT{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" work_top row">
            <div className="collage_left forhover col-lg-7 col-sm-12">
              <div className="collage_img1 veiw position-relative over ">
                <Image src={ui1} alt="" />
                <div className="project_hover">
                  <div className="bold_letter"> Donation Paltfrom</div>
                  <div className="bold_letter1">NO CODE</div>
                  <div className="link_btn">
                    <a href=""> VIEW PROJECT </a>
                  </div>
                </div>
              </div>
              <div className="collage_img2  veiw position-relative over ">
                <Image src={ui2} alt="" />
                <div className="project_hover position-absolute">
                  <div className="bold_letter"> Donation Paltfrom</div>
                  <div className="bold_letter1">NO CODE</div>
                  <div className="link_btn">
                    <a href=""> VIEW PROJECT </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="collage_right forhover col-lg-5 col-sm-12">
              <div className="collage_img3  veiw position-relative over ">
                <Image src={ui3} alt="" />
                <div className="project_hover">
                  <div className="bold_letter"> Donation Paltfrom</div>
                  <div className="bold_letter1">NO CODE</div>
                  <div className="link_btn">
                    <a href=""> VIEW PROJECT </a>
                  </div>
                </div>
              </div>
              <div className="collage_img4  veiw position-relative over ">
                <Image src={ui4} alt="" />
                <div className="project_hover">
                  <div className="bold_letter"> Donation Paltfrom</div>
                  <div className="bold_letter1">NO CODE</div>
                  <div className="link_btn">
                    <a href=""> VIEW PROJECT </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
