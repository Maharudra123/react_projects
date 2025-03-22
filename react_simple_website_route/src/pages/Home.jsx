import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center  text-center">
      <h1>Welcome to My React Website</h1>
      <p>This is a simple website built with React Router and Bootstrap.</p>
    </Container>
  );
}

export default Home;
