import kfc from "../../public/assets/cl4.png"
import React from "react"
import Image from "next/image"
import { Container } from "react-bootstrap"
const Testimonial = () => {
    return (
        <div className="testimonial-new py-5" id="testimonial">
            <Container>
                    <div className="text-white">
                        <h2 className="testimonial-title text-center mb-0 mt-3 mb-3 ">Testimonials</h2>
                    </div>
                        <div className="testimonial text-center px-3 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellendus aperiam autem? Impedit eum, molestias fuga, quos veniam quo harum error, expedita voluptatum aliquid soluta doloremque facilis nulla amet asperiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non beatae enim similique corporis asperiores illo amet perspiciatis aliquam harum quo officiis, vel sunt praesentium soluta, nobis voluptas omnis unde.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cum voluptas porro error mollitia unde! Aut cumque nesciunt atque rem aspernatur totam? Minima, dolorum beatae? Iste, quod. Labore, nam fuga?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi reprehenderit corrupti praesentium laboriosam culpa nam enim nemo eveniet voluptatum perspiciatis, fugiat provident tempore alias cupiditate maiores totam, aut accusantium?</div>

                        <div className="py-3 d-flex align-items-center justify-content-center">
                            <Image src={kfc} alt="user" width={50} height={50} pt-3 />
                        </div>
                        <p className="user-name mb-0 fs-4 fw-semibold d-flex text-white align-items-center justify-content-center ">Nithish</p>
                        <p className="user-designation d-flex text-white align-items-center justify-content-center">Frontend Developer</p>
            </Container>
        </div>
    )
}
export default Testimonial;