import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bestfriendsheader.png";
import projImg2 from "../assets/img/headerimg.png";
import projImg3 from "../assets/img/innocuousai.png";
import projImg4 from "../assets/img/Group_1183.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BestFriends - Internship",
      description: "Teen Safety",
      imgUrl: projImg1,
    },
    {
      title: "Chitta",
      description: "AI Mental Health",
      imgUrl: projImg2,
    },
    {
      title: "Innocuous AI - Internship",
      description: "DevOps, MLOps, and AutoML",
      imgUrl: projImg3,
    },
    {
      title: "Dove Gallery",
      description: "Virtual Art Gallery",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I’ve developed several projects that combine technology with social impact. LegisLens, my AI-powered app accepted at the Congressional Hackathon 6.0, simplifies complex legislation to make government information more accessible. Chitta, an award-winning mental health app, uses AI for emotion detection, provides resources to support well-being, and a AI Therapist,  earning me the NCWIT Bay Area Award and recognition from the California District Attorney. I have also created a Fintech AI app, FinBot, at the UC Berkeley AI Hackathon that analyzes real-time financial data to develop a multi-modal bank aggregator, machine learning stock predictions, mulit-modal financial advisor LLM, and more. </p> 
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Posters</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
