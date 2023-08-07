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
                        <p className="scope-content">
                            <b>An Outlook of what we do in -30 Days to Day 0</b>

                            <p>Welcome to 100 Days of MVP, where idea meets innovation!</p>

                            <p>Our extensive research and experience in building multiple minimum viable products has taught us one golden rule. <b> A well-defined scope gurantees an outstanding MVP. </b> We understand that defining the parameters and objectives of a project is a critical foundation for successful launch of the product.</p>

                            <p>Our team of skilled professionals with their expertise and experience have designed a lucid step-by-step process to precisely determine the scope thereby empowering the founders to make informed decisions, mitigate risks, be cost-efficient and optimize their project planning.</p>

                            <b>What is Scoping?</b>

                            <p>Scoping refers to the process of defining and limiting the features and functionalities that will be included in the initial version of the product. The scoping phase is vital in MVP development. It defines the MVP`s core features, aligns them with the target audience, and sets boundaries essential for avoiding unnecessary deviations from the project`s original goals.</p>

                            <b>What happens in The Scoping Phase?</b>

                            <p>Our 30-day process is meticulously designed to ensure a comprehensive journey, starting from NDA and Scope Discussion, progressing to GTM Strategy, and concluding with two crucial documents: <b>Proposal</b> and <b>Detailed Requirement Analysis</b> that encompass a detailed step by step process involved in multiple tasks. This 30 Days phase is divided into roughly four weeks and each week is dedicated to specific tasks like</p>

                            <b>Signing NDA:</b> <p> An NDA (Non-Disclosure Agreement) is a legally binding contract that ensures confidentiality by prohibiting the disclosure of sensitive information to third parties.</p>

                            <b>Scope Definition:</b> <p>The scoping phase starts with a clear definition of the project`s objectives, goals, and vision. It`s essential to understand what problem the MVP aims to solve and how it aligns with the business strategy.</p>

                            <b>Knowledge Transfer with Stakeholders:</b> <p>The stakeholders, including product managers, developers, designers, and business representatives, come together to discuss and align on the defined scope, project goals and share their expertise.</p>

                            <b>Identifying the Core Features:</b> <p>Determine the key features that directly address the core problem your product aims to solve, provides the most significant value to users and differentiate your product from others. It is called Minimum Marketable Feature Set(MMFS) and this is defined.</p>

                            <b>Analysing and Prioritising Functionality:</b>  <p>Evaluating project requirements and challenges and rank the identified features based on their importance and feasibility. Focus on implementing the high-priority features first and leave the less critical ones for future iterations.</p>

                            <b>Development Tasks and Module Creation:</b> <p>Implementation of software features, functionalities and building of distinct components or modules that contribute to the overall system.</p>

                            <b>Setup and Design Process:</b> <p>Establishing necessary infrastructure and tools to create visual and functional designs.</p>

                            <b>Testing Tasks:</b> <p>Conducting quality and functionality tests.</p>

                            <b>Management Tasks and Periodical Reporting:</b> <p>Overseeing project progress, coordination and providing timely project updates.</p>

                            <b>DevOps Tasks:</b> <p> Managing software integration and deployment.</p>

                            <b>Prototyping:</b> <p>In some cases, a basic prototype or wireframe may be created during the scoping phase to provide a visual representation of the MVP`s user interface and workflow. This can help stakeholders better understand the product`s direction.</p>

                            <b>Keeping It Simple:</b> <p>Simplicity in the MVP avoids adding complex features that are nice-to-have but not essential for the initial version. The goal is to get a working version out quickly to gather feedback and validation.</p>

                            <b>Setting Boundaries:</b> <p>Clearly define what features are out of scope for the MVP to keep the development team focused on the essential elements.</p>

                            <b>Timeline and Resource Planning:</b> <p>A rough timeline for the MVP`s development is established, along with an estimation of the required resources (e.g., development team, budget, technology stack).</p>

                            <b>Risk Assessment:</b> <p>Potential risks and challenges that may arise during the development and launch of the MVP are identified and assessed. Strategies for mitigating these risks are discussed.</p>

                            <b>Documentation:</b> <p>All the findings, decisions, and scoping-related details are documented for future reference in the Proposal and Detailed Requirement Analysis Documents.
                                Embracing the latest tools, technologies and methodologies, 100 Days of MVP stands by its clients every step of the way, from the initial concept to the final deliverables offering unparalleled support and bespoke solutions tailored to individual needs.
                                Let 100 Days of MVP be your trusted tech partner in achieving unparalleled success through our robust scoping strategies. Together, we`ll transform your visions into reality, one project at a time.</p>
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default page;