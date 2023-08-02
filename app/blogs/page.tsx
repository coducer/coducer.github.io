'use client'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React from "react";
import { Container } from "react-bootstrap";
import Structure from "../../components/blogstructure/structure";

const page = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Container>
                    <Structure/>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;