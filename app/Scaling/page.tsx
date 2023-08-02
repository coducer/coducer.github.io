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
                        <p className="Scaling-content">
                            <b>Scaling Phase</b>

                            <p>In the final phase, we help you to scale up the product by building new components or by pivoting existing features based on customer feedback and success in the market. Our primary focus is on prioritising and implementing user-driven enhancements, building new components, expand functionality with new modules, pivoting existing features and adaping them based on market validation, streamlining the processes to optimise performance and scalability, tech workload optimization for heavy workloads and employ rapid development iterations to deliver an outstanding MVP in 100 Days!</p>

                            <b>Week 1 (Day 91 to 95)</b> -  <p>Reviewed UAT is submitted after validation and is now ready to be launched.</p>
                            <b>Week 2 (Day 96 to 100)</b> - <p>Execute a launch plan on designated platforms, finalise the product and the fully functional MVP is successfully deployed and goes live.</p>

                            <p>The 100 days of MVP building approach emphasizes speed, efficiency, and responsiveness to user needs. It`s important to note that while the 100-day timeframe is arbitrary, the key idea is to set a fixed timeline and focus on delivering a functional product with a clear value proposition within that timeframe. The key to a successful MVP is to keep it simple, focus on the core value proposition, and iterate based on user feedback to improve the product continually.
                                We at 100 Days of MVP painstakingly work on the designated deadline to deliver your MVP in record time, every time. Embracing the latest tools, technologies and methodologies, 100 Days of MVP stands by its clients every step of the way, from the initial concept to the final deliverables offering unparalleled support and bespoke solutions tailored to individual needs.
                                Let 100 Days of MVP be your trusted tech partner in achieving unparalleled success through our robust strategies. Together, we`ll transform your visions into reality, one project at a time.</p>
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;