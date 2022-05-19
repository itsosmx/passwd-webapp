import React from "react";
import logo from "../../assets/logo.png";
import { Linking } from "../../utils/constants";
import { Banner, Container, Download, Header } from "./styled";
import badge from "../../assets/google-play-badge.png";
import BannerImg from "../../assets/Banner_trans.jpg";

export default function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <h1>Ornn</h1>
        <p>Password Manager to keep your passwords safe.</p>
      </Header>

      <Download>
        <a href={Linking.google_play} target="_blank">
          <img src={badge} alt="Download" />
        </a>
      </Download>

      <Banner>
        <img src={BannerImg} alt="" />
      </Banner>
    </Container>
  );
}
