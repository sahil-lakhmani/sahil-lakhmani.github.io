import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

import coverImg from "../../assets/images/meddy_buddy.png";

export const MeddyBuddyDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MeddyBuddy - Sahil Lakhmani</title>
          <meta name="description" content="MeddyBuddy - Autonomous Medical UAV for Remote Health Monitoring" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">MeddyBuddy</h1>
          <p className="project-subtitle">Autonomous Medical UAV for Remote Health Monitoring</p>
        </div>

        <div className="project-image">
          <img src={coverImg} alt="MeddyBuddy Medical Drone" />
        </div>

        <div className="project-section">
          <h2>Overview & Impact</h2>
          <p>
            Developed a mission-critical autonomous medical UAV engineered to provide remote health monitoring and supply delivery during emergency situations.
          </p>
        </div>

        <div className="project-section">
          <h2>Technical Architecture</h2>
          <ul>
            <li>Validated operations in ArduPilot–Gazebo SITL using Python scripts via DroneKit and pymavlink.</li>
            <li>Achieved extremely accurate ±0.5 m waypoint accuracy across 20+ validated emergency-response simulations.</li>
            <li>Engineered robust, low-latency (&lt;50 ms) MAVLink telemetry tracking.</li>
            <li>Implemented custom RTL (Return To Launch) fail-safe logic ensuring the drone safely recovers its costly payload under stress conditions.</li>
            <li>Designed a vibration-isolated mechanical payload to safely transport fragile medical data transmission modules.</li>
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
