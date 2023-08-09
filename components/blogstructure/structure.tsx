'use client'
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Author from "../../public/assets/cad2cddbbee48118f17cf866279ccfd4-businesswoman-avatar-silhouette.png"
import Mvp from "../../public/assets/123.png"

const Structure = () => {
    return (
        <div className="section-blog" style={{ minHeight:"100vh"}}>
            <Container>

                <div className="text-center py-5">
                    <div className="blog-page-header">Our Latest Blog Posts</div>
                    <div className="blog-page-subheader"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div>
                </div>

                <div className="blog-row row mb-5">
                    <div className="blog-item col-lg-4">
                        <a href="blogs/100daysofmvp" className="text-decoration-none text-black">
                            <div className="blog-img">
                                <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                            </div>
                            <div className="blog-details">
                                <div className="blog-genre pt-3">Story</div>
                                <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                                <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                            </div>
                            <div className="author-info align-items-center pt-3">
                                <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                                <div className="px-2">
                                    <div className="author-name">Indira</div>
                                    <div className="publish-date">January 01,2023</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <div className="blog-item col-lg-4">
                    <a href="blogs/superhero" className="text-decoration-none text-black">

                        <div className="blog-img">
                            <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                        </div>
                        <div className="blog-details">
                            <div className="blog-genre pt-3">Story</div>
                            <div className="blog-title py-3">Super Hero</div>
                            <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="author-info align-items-center pt-3">
                            <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                            <div className="px-2">
                                <div className="author-name">Nithish</div>
                                <div className="publish-date">January 01,2023</div>
                            </div>
                        </div></a>
                    </div>

                    <div className="blog-item col-lg-4">
                        <div className="blog-img">
                            <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                        </div>
                        <div className="blog-details">
                            <div className="blog-genre pt-3">Story</div>
                            <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                            <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="author-info align-items-center pt-3">
                            <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                            <div className="px-2">
                                <div className="author-name">Nithish</div>
                                <div className="publish-date">January 01,2023</div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* <div className="row mb-5">
                    <div className="blog-item col-lg-4">
                        <div className="blog-img">
                            <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                        </div>
                        <div className="blog-details">
                            <div className="blog-genre pt-3">Story</div>
                            <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                            <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="author-info align-items-center pt-3">
                            <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                            <div className="px-2">
                                <div className="author-name">Nithish</div>
                                <div className="publish-date">January 01,2023</div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-item col-lg-4">
                        <div className="blog-img">
                            <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                        </div>
                        <div className="blog-details">
                            <div className="blog-genre pt-3">Story</div>
                            <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                            <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="author-info align-items-center pt-3">
                            <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                            <div className="px-2">
                                <div className="author-name">Nithish</div>
                                <div className="publish-date">January 01,2023</div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-item col-lg-4">
                        <div className="blog-img">
                            <Image src={Mvp} alt="MVP landing" className="blog-img-box" />
                        </div>
                        <div className="blog-details">
                            <div className="blog-genre pt-3">Story</div>
                            <div className="blog-title py-3">Why 100 Days Of MVP?</div>
                            <div className="blog-oneliner">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="author-info align-items-center pt-3">
                            <div className="auth-img"><Image src={Author} alt="author-image" width={50} /></div>
                            <div className="px-2">
                                <div className="author-name">Nithish</div>
                                <div className="publish-date">January 01,2023</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Container>
        </div>
    )
}

export default Structure;