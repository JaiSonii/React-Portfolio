import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";
import SkillSet from "./SkillSet";



export const Skills = ()=>{

    const set = [
        {
            skillName:"NodeJS",
            imgURL:meter1
        },
        {
            skillName:"ReactJS",
            imgURL:meter3
        },
        {
            skillName:"HTML",
            imgURL:meter2
        },
        {
            skillName:"CSS",
            imgURL:meter1
        },
        {
            skillName:"JavaScript",
            imgURL:meter2
        },
        {
            skillName:"JQuery",
            imgURL:meter3
        },
        {
            skillName:"Shell",
            imgURL:meter1
        },
        {
            skillName:"MongoDB",
            imgURL:meter2
        },
        {
            skillName:"Python Programming",
            imgURL:meter3
        },
        {
            skillName:"Java Programming",
            imgURL:meter1
        },
        {
            skillName:"C Programming",
            imgURL:meter2
        },
        {
            skillName:"C++",
            imgURL:meter3
        },
        {
            skillName:"ExpressJS",
            imgURL:meter1
        },
        {
            skillName:"Block Chain",
            imgURL:meter2
        },
        {
            skillName:"Web3",
            imgURL:meter3
        }
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>
                                Skills
                            </h1>
                            <p>
                            I possess a diverse set of skills covering various aspects of web development and programming. From building dynamic web applications to working with databases and blockchain technologies, my skill set is designed to bring creativity and functionality to any project. Here are some of the key skills I bring to the table: 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    set.map((skill,index)=>{
                                        return(
                                            <SkillSet 
                                            key={index}
                                            skillName={skill.skillName}
                                            link={skill.imgURL}
                                             />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
                <img src={colorsharp} alt="image" className="background-image-left"/>

        </section>
      )
}