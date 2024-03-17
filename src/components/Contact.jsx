import React from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: '',
        phone: "",
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const[status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://portfolio-server-7ch2.onrender.com/contact",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body : JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success : true, message: "Message Sent Successfully"});
        }
        else{
            setStatus({success : false, message: "Something Went Wrong"});
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contactImg" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className="px-1" md={6}>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)} />
                                </Col>
                                <Col className="px-1" md={6}>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)} />
                                </Col>
                                <Col className="px-1" md={6}>
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)} />
                                </Col>
                                <Col className="px-1" md={6}>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone',e.target.value)} />
                                </Col>
                                <Col className="px-1" md={6}>
                                    <textarea rows='6' value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                   status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success" }>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;