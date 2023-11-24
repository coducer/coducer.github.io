'use client'
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Author from "../../public/assets/Indira.jpeg"
import Mvp from "../../public/assets/blog_images/1 (2).png"
import Mvp_blog2 from "../../public/assets/startup-3-1024x525.jpg"



const Structure = () => {
    let today = new Date().toISOString().slice(0, 10)
    return (
        <div className="section-blog" style={{ minHeight: "100vh" }}>
            <Container>
                <div className="text-center py-5">
                    <div className="blog-page-header">Our Latest Blog Posts</div>
                </div>

                <div className="row pb-5">
                    <div className="blog-item col-lg-4">
                        <a href="https://www.linkedin.com/pulse/how-non-tech-superhero-founder-can-transform-revolutionizing%3FtrackingId=LhXalP6UVCV7sEfVo%252FCYEg%253D%253D/?trackingId=LhXalP6UVCV7sEfVo%2FCYEg%3D%3D" target="_blank" className="text-decoration-none text-black">
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
                                    <div className="publish-date">{today}</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-item ">
                            <a href="https://www.linkedin.com/pulse/from-startup-idea-wow-mvp-story-explained-100daysofmvp-3vx9f?trk=public_post_embed_feed-article-content" target="_blank" className="text-decoration-none text-black">
                                <div className="blog-img">
                                    <Image src={Mvp_blog2} alt="MVP landing" className="blog-img-box" height={100} />
                                </div>
                                <div className="blog-details mt-5 pt-2">
                                    <div className="blog-genre pt-3">Story</div>
                                    <div className="blog-title py-3">From Startup Idea to Wow</div>
                                    <div className="blog-oneliner">The MVP Story Explained!</div>
                                </div>
                                <div className="author-info align-items-center pt-5 mt-2">
                                    <div className="auth-img">
                                        <Image src={Author} alt="author-image" height={50} />
                                    </div>
                                    <div className="px-2">
                                        <div className="author-name">Indira</div>
                                        <div className="publish-date">{today}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Structure;