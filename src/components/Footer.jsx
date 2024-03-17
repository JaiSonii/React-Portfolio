import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg"
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer(){

    const instaLink = 'https://www.instagram.com/fyjaii__?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
  const gitHub = 'https://github.com/JaiSonii'
  const linkedIn = "https://www.linkedin.com/in/jai-soni-879764257/"

    return(
        <footer className="footer">
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href={linkedIn} target="blank"><img src={navIcon1} /></a>
                            <a href={gitHub} target="blank"><img src={navIcon2} /></a>
                            <a href={instaLink} target="blank"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2023, Jai's Portfolio</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;