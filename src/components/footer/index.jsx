import React from "react";
import { Link } from "react-router-dom";
import { Container, Copyrights, Links } from "./styled";

export default function Footer() {
  return (
    <Container>
      <Copyrights>
        Copyright © 2022 <a href="https://osmx.me/">OSMX</a>
      </Copyrights>

      <Links>
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy</Link>
      </Links>
    </Container>
  );
}
