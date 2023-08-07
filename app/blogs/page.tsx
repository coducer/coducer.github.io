"use client";
import { Container } from "react-bootstrap";
import Structure from "../../components/blogstructure/structure";
import Navbar from "../../components/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Container>
          <Structure />
        </Container>
      </div>
    </div>
  );
};

export default page;
