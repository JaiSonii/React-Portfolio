import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(0);

  const toRotate = [ "Web Developer", "Mern Stack Developer", "BlockChain & Web3 Developer","Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const CV = "https://drive.google.com/drive/folders/1-AFCeeOH1IFyu3e4KcvYDNeBwWeds5gm"

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({isVisible}) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{"Hi I am Jai Soni"} <span>{text}</span></h1>
            <p>A passionate and results-driven MERN Stack and Blockchain Developer with a knack for turning ideas into reality. With a strong foundation in web development technologies like Node.js, React, and MongoDB, I thrive on challenges and continually seek opportunities to expand my skill set. My goal is to create innovative and efficient solutions that make a positive impact. Explore my projects, skills, and experiences to get a glimpse of what I bring to the world of software development.</p>
            <button><a href={CV} className="cv" target="blank">Link to my CV<ArrowRightCircle /></a></button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
                  <img className="header-img" src={headerImg} alt="Header Img"/>
                
          </Col>
        </Row>
      </Container>
    </section>
  )
}
