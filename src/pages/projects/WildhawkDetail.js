import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

import coverImg from "../../assets/images/wildhawk.png";

export const WildhawkDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wildhawk - Sahil Lakhmani</title>
          <meta name="description" content="Wildhawk - Autonomous Wildlife Surveillance Drone" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Wildhawk</h1>
          <p className="project-subtitle">Autonomous Wildlife Surveillance Drone</p>
        </div>

        <div className="project-image">
          <img src={coverImg} alt="Wildhawk Surveillance" />
        </div>

        <div className="project-section">
          <h2>Overview & Demonstration</h2>
          <p>
            Built and showcased a prototype "Perception-to-Action" UAV pipeline at InterIIT Tech Meet 13.0, aiming to provide an autonomous wildlife deterrence mission without constant manual control.
          </p>
        </div>

        <div className="project-section">
          <h2>Technical Architecture</h2>
          <ul>
            <li>Integrated ROS2 Humble with PX4 Offboard control natively via MAVROS for fully autonomous flight maneuvers and waypoint handling.</li>
            <li>Developed and deployed a quantized MobileNetV2 (INT8, TensorFlow Lite) edge inference module directly on a Raspberry Pi 4 edge device.</li>
            <li>Achieved 28 FPS and 85% object detection accuracy under variable wild lighting, all operating within a strict &lt;10 W power budget.</li>
            <li>Designed a three-mode autonomous state machine (Patrol → Acquisition → Deterrence) featuring a centroid-tracking PID loop paired with GPS geofencing.</li>
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
