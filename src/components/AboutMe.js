import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImage from '../assets/img/linkedinpfp.png'; // Ensure the path is correct
import certificateImage from '../assets/img/GCC_badge_UX_1000x1000.png'; // Path to the new certificate image

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <img src={headerImage} alt="Header" className="header-image"/>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h2>My Journey</h2>
                  <div className="timeline">
                    <div className="timeline-item">
                      <h3>2020</h3>
                      <p>Started my journey as a web developer.</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2021</h3>
                      <p>Dived into AI/ML, working on several exciting projects.</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2022</h3>
                      <p>Expanded my skill set to include UI/UX design.</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2023</h3>
                      <p>Launched my first mobile app.</p>
                    </div>
                  </div>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
