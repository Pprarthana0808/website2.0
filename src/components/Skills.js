import React from 'react';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import './Skills.css'; // Your CSS file

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="bubble-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I'm skilled in Python, JavaScript, and full-stack development with React, Tailwind, and Node.js. 
                I have experience applying AI and machine learning to real-world problems, from mental health and legislation to renewable energy. 
                Combining technical expertise with creativity and leadership, I build innovative, socially impactful solutions.
              </p>

              {/* Resume Download Button */}
              <a 
                href="/Resume.pdf" 
                download 
                className="btn btn-primary mb-4"
              >
                Download My Resume
              </a>

              {/* Skills Carousel */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Programming Skills" />
                  <h5>Programming Languages: Python, JavaScript, C/C++, HTML, CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="AI/ML Skills" />
                  <h5>AI/ML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Software Development Skills" />
                  <h5>Software Development: Full-stack web development, API integration, app deployment</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="UI/UX Skills" />
                  <h5>UI/UX Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
