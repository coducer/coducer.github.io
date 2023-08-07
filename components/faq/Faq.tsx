import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faq = () => {
    return (
        <div className="section-faq pt-5" id="faq">
            <Container>
                <div className="row">
                    <div className="acco-detail col-lg-5 pb-5">
                        <div className="faq-head text-white">Frequently Asked Questions</div>
                        <div className="faq-sub text-white">Find answers to common queries about our services,<br />
                            pricing, and process in our comprehensive FAQ section.</div>
                    </div>
                    <div className="col-lg-7">
                        <Accordion defaultActiveKey="0" className=" ">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >
                                    <div className="d-flex justify-content-between flex-grow-1 " >
                                        Why Should I Prefer 100 Days of MVP?                                </div>
                                </Accordion.Header>
                                <Accordion.Body className="acco ">
                                    100 Days of MVP brings extensive experience working with successful tech startups, providing step-by-step approaches to shape and validate solutions from day -30. With proven tools, strategies, and experts, we deliver tangible results in record time.

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    How can you deliver a functional MVP within 100 Days?                                
                                    </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    With our time-tested process in product development and by leveraging our repository of reusable and customizable modules, we bring products to market quickly.

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    Do I get access to the Code of my MVP?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    You`ll receive the final MVP Code after completing milestones and making the final payment.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    What Technologies and Tools do you use?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    We use JavaScript, TypeScript, and Python as needed. Instead of rebuilding, we employ a combination of open-source libraries/products and SaaS solutions, following a reactive, Don`t Repeat Yourself (DRY) policy.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    Why do you prefer Open Source over Proprietary Technologies?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    Open Source grants freedom for customization, ensuring unique products that captivate users and enrich their lives using unique tools.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    Does the Technology vary when the Product is ready to Scale?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    Not necessarily. We opt for microservices over monolithic architecture, allowing flexible service building or replacement as needed.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    Do you Assist in Marketing the Launched Product?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    Presently, our only focus is on rapidly developing product features to help you go-to-market swiftly. Nevertheless, we offer top-notch recommendations.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="7">
                                <Accordion.Header><div className="d-flex justify-content-between flex-grow-1">
                                    Do you provide Maintenance and Additional Support after Launch?
                                </div></Accordion.Header>
                                <Accordion.Body className="acco">
                                    Yes. Bug fixes are available for 30 days from the date of source code delivery.

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Faq;