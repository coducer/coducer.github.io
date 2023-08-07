'use client'
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { Container } from "react-bootstrap";

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="min-vh-100">
                <Container>
                    <div className="scope py-3">
                        <p className="development-content">
                            <b>The Design Phase</b>

                            <p>Digital Products that address users needs directly, plainly, and neatly win their heart right away! A well-presented visual layout transforms the overall look and feel of the product in an instant. Accordingly, the first twenty days are entirely focused on designing the visuals of the product.
                                This phase comprises of 4 Weeks.</p>

                            <b>Week 1 (Day 1 to 5) </b>- <p> We work on enhancing the User Experience (UX) and Architectural Elements of the MVP, designing data models for structuring and organising data effectively and creating an overall high-level system design plan.</p>
                            <b>Week 2 (Day 6 to 10) </b>- <p>We will give you a demo of the progess made and iterations to be made are noted.</p>
                            <b>Week 3 (Day 11 to 15) </b>- <p>We will focus on the layout of the visual elements & content and design the user interface for seamless interaction taking the iterations into account.</p>
                            <b>Week 4 (Day 15 to 20) </b>- <p>We will give you the final demo of the Design to keep you aligned with the changes and progess made so far.</p>
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;