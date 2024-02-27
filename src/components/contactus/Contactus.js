import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!😒");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Server issue👩‍💻 Fixing it🤖Connect through Social Media💖.");
    }

    setFormData({});
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:harishindian123@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        playgod378@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+7339176152`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+7339176152</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/ecPu2vQj4P5hokVs9"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Cheremangalam,Manavalakurichi,  Kanniya Kumari Dist,
                          Tamil Nadu, India - 629252
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12584.041036408776!2d77.3047515!3d8.161549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fb1774620f73%3A0x34d5b1b06171d09d!2sPeriyakulam%20Yela!5e0!3m2!1sen!2sin!4v1641915458498!5m2!1sen!2sin
                      "
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
