'use client'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React from "react";
import { Container } from "react-bootstrap";

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="min-vh-100">
                <Container>
                    <div className="scope py-3">
                        <p className="Launch-content">
                            <b>The Launch Phase</b>

                            <p>The next organic step after development of the product is to launch the tested and validated product. In this phase, patterns, pain points, and opportunities are analyzed from the feedbacks received. 3 whole weeks are solely dedicated to this.</p>

                            <b>Week 1 (Day 76 to 80)</b> -  <p>A Demo of the developed product is given and the Third and Final Batch of Design(R3) is released. The R3 released is the UAT(User Acceptance Testing) Reading, the last stage of Software Development lifecycle.</p>
                            <b>Week 2 and 3 (Day 81 to 90)</b> -  <p>Based on user testing, reviews and feedback, observations are noted and iterative improvements are made. Changes are validated and updated versions are further tested.</p>
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;