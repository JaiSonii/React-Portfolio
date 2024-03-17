import React from "react";
import { Col } from "react-bootstrap";

function ProjectCards({title, description, imgURL,link}){
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx"><a href={link} target="blank">
                <img src={imgURL} />
                <div className="proj-txtx">
                <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </a></div>
            
        </Col>
    )
}

export default ProjectCards;