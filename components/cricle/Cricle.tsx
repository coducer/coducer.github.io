import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const Cricle = () => {
  const [animation, setAnimation] = useState(false);
  const startAnimaton = () => {
    if (window.scrollY >= 120) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", startAnimaton);
  }, []);

  return (
    <>
      <div className="side_place">
        <div className="rings ">
          <div className="circ  c1">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className={animation ? "semi_cricle curve1" : ""}></div>
                </div>
                <div className={animation ? "load-up up_triangle1" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 1 </div>
            <div className="tab"> Step 1 </div>
            <div className="mobile"> -30 - 0 Days </div>

            <div className="sub1">
              <div className="description_duration_title">Scoping</div>
              <div className="description_small">
                {/* <p>Bringing your ideas to life with our expert development. </p> */}
                <p>
                  understand the requirement, prioritize the features of your
                  MVP based on market needs.
                </p>
              </div>
              <div className="days">
                -30 - 0<span id="small">Days</span>
              </div>
            </div>

            <div className="tab_cricle">
              <div className="part1">
                <div className="description_duration_title">Scoping</div>
                <div className="days">
                  1 - 19<span id="small">Days</span>
                </div>
              </div>
            </div>
          </div>
          <div className="circ  c2">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down">
                  <div
                    className={animation ? "semi_cricle_reverse curve2" : ""}
                  ></div>
                </div>
                <div
                  className={animation ? "load-down down_triangle1" : ""}
                ></div>
              </div>
            </div>
            <div className="desktop"> Step 2 </div>
            <div className="tab"> Step 2 </div>
            <div className="mobile"> 1 - 20 Days </div>
            <div className="sub2">
              <div className="days_down">
                1 - 20<span id="small">Days</span>
              </div>
              <div className="description_duration_title">Design</div>
              <div className="description_small">
                <p>
                  Design the visual, user experience and architectural elements
                  of the MVP, including the data models, high-level system
                  design, layout, user interface, and overall look and feel of
                  the product.
                </p>

                {/* <p>Lorem ipsum dolor sit amet consectetur </p> */}
              </div>
            </div>
            <div className="tab_cricle2">
              <div className="part1">
                <div className="description_duration_title"> Design</div>
                <div className="days">
                  1 - 20<span id="small">Days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="circ  c3">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className={animation ? "semi_cricle curve3" : ""}></div>
                </div>
                <div className={animation ? "load-up up_triangle2" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 3 </div>
            <div className="tab"> Step 3 </div>
            <div className="mobile"> 21 - 75 Days </div>
            <div className="sub1">
              <div className="description_duration_title"> Development</div>
              <div className="description_small">
                <p>
                  Creating a functional MVP with our efficient development
                  approach.
                </p>
                {/* <p>Lorem ipsum dolor sit amet consectetur </p> */}
              </div>
              <div className="days">
                21 - 75<span id="small">Days</span>
              </div>
            </div>
            <div className="tab_cricle">
              <div className="part1">
                <div className="description_duration_title">Development</div>
                <div className="days">
                  21 - 75<span id="small">Days</span>
                </div>
              </div>
            </div>
          </div>
          <div className="circ   c4">
            <div className="part">
              <div className="fortriangle">
                <div className="dot-down"></div>
                <div className="line-down"></div>
                <div className="semi-donut-down">
                  <div
                    className={animation ? "semi_cricle_reverse curve4" : ""}
                  ></div>
                </div>
                <div
                  className={animation ? "load-down down_triangle2" : ""}
                ></div>
              </div>
            </div>
            <div className="desktop"> Step 4 </div>
            <div className="tab"> Step 4 </div>
            <div className="mobile"> 76 - 90 Days </div>
            <div className="sub2">
              <div className="days_down">
                76 - 90<span id="small">Days</span>
              </div>
              <div className="description_duration_title">Launch</div>
              <div className="description_small">
                {/* <p>Ensuring quality with thorough testing before release. </p> */}
                <p>
                  Iterate and launch the tested and validated product based on
                  user testing and feedback to ensure that it meets the needs of
                  the target market.
                </p>
              </div>
            </div>
            <div className="tab_cricle2">
              <div className="part1">
                <div className="description_duration_title">Launch</div>
                <div className="days">
                  76 - 90<span id="small">Days</span>
                </div>
              </div>
            </div>
          </div>
          <div className="circ  c5">
            <div className="part">
              <div className="fortriangle">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="semi-donut-up">
                  <div className={animation ? "semi_cricle curve5" : ""}></div>
                </div>
                <div className={animation ? "load-up up_triangle3" : ""}></div>
              </div>
            </div>
            <div className="desktop"> Step 5 </div>
            <div className="tab"> Step 5 </div>
            <div className="mobile"> 90 -100 Days </div>
            <div className="sub1">
              <div className="description_duration_title"> Scaling</div>
              <div className="description_small">
                <p>
                  Based on customer feedback and success in the market, we help
                  you to scale the product by building or pivoting features.
                </p>
              </div>
              <div className="days">
                90 - 100<span id="small">Days</span>
              </div>
            </div>
            <div className="tab_cricle">
              <div className="part1">
                <div className="description_duration_title"> Scaling</div>
                <div className="days">
                  90 - 100<span id="small">Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cricle;
