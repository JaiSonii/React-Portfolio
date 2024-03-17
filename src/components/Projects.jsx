import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorsharp2 from "../assets/img/color-sharp2.png";

import "animate.css"
import TrackVisibility from "react-on-screen";

import { projects1, projects2, projects3 } from "./ProjectList";

function Projects() {

    const [tabPane, setTabPane] = useState(1);

    

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn " : ""}>
                                    <h2>
                                        Projects
                                    </h2>
                                    <p>This section contains the list of my projects and links to some projects I have deployed by my self. Please have a Look </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" onClick={()=>setTabPane(1)}>React/Next</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" onClick={()=>setTabPane(2)}>HTML/CSS/JS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" onClick={()=>setTabPane(3)}>
                                        Static
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Pane eventKey="first">
                            {tabPane===1 ? 
                            <Row>
                                    {
                                        projects1.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row> : ""}
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            {tabPane===2 ?
                            <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row> : ""}
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="third">
                            {tabPane===3 ?
                            <Row>
                                    {
                                        projects3.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row> : ""}
                            </Tab.Pane>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp2} />
        </section>
    )
}

export default Projects;