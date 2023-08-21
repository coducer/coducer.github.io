'use client'
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Author from "../../public/assets/Indira.jpeg"
import Mvp from "../../public/assets/blog_images/1 (2).png"
import Tools from "../../public/assets/blog_images/3-1.png"
import Agile from "../../public/assets/blog_images/2 (1).png"
import Vision from "../../public/assets/blog_images/2-1.png"


const Structure = () => {
    let today = new Date().toISOString().slice(0, 10)
    return (
        <div className="section-blog" style={{ minHeight: "100vh" }}>
            <Container>

                <div className="text-center py-5">
                    <div className="blog-page-header">Our Latest Blog Posts</div>
                    <div className="blog-page-subheader"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div>
                </div>

                <div className="blog-row row pb-5">
                    <div className="blog-item col-lg-4">
                        <a href="https://www.linkedin.com/pulse/how-non-tech-superhero-founder-can-transform-revolutionising%3FtrackingId=%252BOERCuRmQuq4SbQ2PG9u5Q%253D%253D/?trackingId=%2BOERCuRmQuq4SbQ2PG9u5Q%3D%3D" target="_blank" className="text-decoration-none text-black">
                            <div className="blog-img">
                                <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                            </div>
                            <div className="blog-details">
                                <div className="blog-genre pt-3">Story</div>
                                <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                                <div className="blog-oneliner">Discover the rationale behind the '100 Days of MVP' approach, exploring its benefits in product development.</div>
                            </div>
                            <div className="author-info align-items-center pt-3">
                                <div className="auth-img"><Image src={Author} alt="author-image" width={30} /></div>
                                <div className="px-2">
                                    <div className="author-name">Indira</div>
                                    <div className="publish-date">{today }</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <div className="blog-item col-lg-4">
                        <a href="blogs/superhero" className="text-decoration-none text-black">
                            <div className="blog-img">
                                <Image src={Agile} alt="MVP landing" className="blog-img-box" />
                            </div>
                            <div className="blog-details">
                                <div className="blog-genre pt-3">Story</div>
                                <div className="blog-title py-3">Journey to Tech Excellence</div>
                                <div className="blog-oneliner">Explore essential tools and technologies that streamline MVP development, enabling efficient prototyping, testing, and validation of your ideas.</div>
                            </div>
                            <div className="author-info align-items-center pt-3">
                                <div className="auth-img"><Image src={Author} alt="author-image" width={30} /></div>
                                <div className="px-2">
                                    <div className="author-name">Indira</div>
                                    <div className="publish-date">January 01,2023</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="blog-item col-lg-4">
                        <a href="blogs/vision" className="text-decoration-none text-black">
                            <div className="blog-img">
                                <Image src={Vision} alt="MVP landing" className="blog-img-box" />
                            </div>
                            <div className="blog-details">
                                <div className="blog-genre pt-3">Story</div>
                                <div className="blog-title py-3">From Vision to MVP</div>
                                <div className="blog-oneliner">Uncover the hurdles non-tech founders confront when crafting an MVP in 100 days, and find actionable solutions in the upcoming blog.</div>
                            </div>
                            <div className="author-info align-items-center pt-3">
                                <div className="auth-img"><Image src={Author} alt="author-image" width={30} /></div>
                                <div className="px-2">
                                    <div className="author-name">Indira</div>
                                    <div className="publish-date">January 01,2023</div>
                                </div>
                            </div>
                        </a>
                    </div> */}
                </div>

{/* 
                <div className="blog-row row mb-5">
                    
                </div> */}
            </Container>
        </div>
    )
}

export default Structure;