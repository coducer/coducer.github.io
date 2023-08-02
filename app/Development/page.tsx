'use client'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React from "react";
import { Container } from "react-bootstrap";

const page = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Container>
                    <div className="scope py-3">
                        <p className="development-content">
                            <b>The Development Phase</b>
                            <p>Once the layout design of the product is finalised, our team begins to take on a well-structured development approach for the next 11 Weeks/55 Days. We focus on choosing appropriate open-source technologies and frameworks, customising and integrating solutions to meet project needs and ensuring seamless integration of the components. Meanwhile, weekly updates and biweekly demos are provided to keep you abreast with the advances made to ensure that we are on the same page in terms of design and features.</p>
                            <b>Week 1 (Day 21 to 25)</b> -  <p>We customise the choice of tools,frameworks and methodology to be used and create a preliminary working model.</p>
                            <b>Week 2 (Day 26 to 30)</b> -  <p>A demo is given of the progress and choices made.</p>
                            <b>Week 3 (Day 31 to 35)</b> -  <p>The strategy that is finalised is implemented.</p>
                            <b>Week 4 (Day 36 to 40)</b> -  <p>A second demo of the working model is given and our First batch of Design(R1) is released.</p>
                            <b>Week 5 (Day 41 to 45)</b> -  <p>Further updates are made on the R1 and new features are experimented with to deliver a stellar product.</p>
                            <b>Week 6 (Day 46 to 50)</b> -  <p>A third demo is given on the progress made so far.</p>
                            <b>Week 7 (Day 51 to 55)</b> -  <p>Compatibility of the open source is ensured for a seamless integration of the functions.</p>
                            <b>Week 8 (Day 56 to 60)</b> -  <p>A fourth demo is given Demo and Second Batch of Design(R2) is released.</p>
                            <b>Week 9 (Day 61 to 65)</b> -  <p>Further developmental tasks are carried out on the R2.</p>
                            <b>Week 10 (Day 66 to 70)</b> - <p>A fifth demo is presented.</p>
                            <b>Week 11 (Day 71 to 75)</b> - <p>We ensure that the product developed is wholesome and aligns with the objective of the customer.</p>
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;