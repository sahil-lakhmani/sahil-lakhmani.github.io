import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

import coverImg from "../../assets/images/line_follower.png";

export const LineFollowerDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Line Follower Drone - Sahil Lakhmani</title>
          <meta name="description" content="Autonomous Navigation Line Follower Drone" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Autonomous Navigation</h1>
          <p className="project-subtitle">Line Follower Drone</p>
        </div>

        <div className="project-image">
          <img src={coverImg} alt="Line Follower Drone" />
        </div>

        <div className="project-section">
          <h2>Overview & Impact</h2>
          <p>
            Developed as part of the MathWorks Minidrone Competition (India 2024 at IISc Bangalore), this project demonstrates an autonomous line-following controller modeled directly for a Parrot Mambo Minidrone.
          </p>
        </div>

        <div className="project-section">
          <h2>Technical Architecture</h2>
          <ul>
            <li>Engineered an autonomous navigation system utilizing advanced model-based design entirely within the MATLAB/Simulink ecosystem.</li>
            <li>Built an integrated flight control system combining image processing filters, path planning, and state-based behavioral logic.</li>
            <li>Executed rigorous simulation-based validation inside the MATLAB environment to guarantee safety constraints prior to physical trials.</li>
          </ul>
        </div>

        <div className="action-buttons">
          <a href="https://github.com/lakhmanisahil" target="_blank" rel="noopener noreferrer" className="action-button">
            View Code
          </a>
        </div>
        <div className="back-button-container">
          <Link to="/portfolio" className="action-button secondary full-width">
            ← Back to Portfolio
          </Link>
        </div>
      </Container>
    </HelmetProvider>
  );
};
