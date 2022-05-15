import React from "react";
import logo from "../../assets/logo.png";
import { Container } from "./styled";
export default function Home() {
  return (
    <Container>
      <img src={logo} alt="" />
      <h1>Ornn</h1>
    </Container>
  );
}
