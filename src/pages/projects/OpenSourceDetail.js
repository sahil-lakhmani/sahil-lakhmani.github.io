import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

import coverImg from "../../assets/images/open_source_ros.png";

export const OpenSourceDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Open Source Contributions - Sahil Lakhmani</title>
          <meta name="description" content="Open Source Contributions to Ardupilot & ros-controls" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Open Source Contributions</h1>
          <p className="project-subtitle">Ardupilot & ros-controls</p>
        </div>

        <div className="project-image">
          <img src={coverImg} alt="Open Source Tech Stack" />
        </div>

        <div className="project-section">
          <h2>Overview & Impact</h2>
          <p>
            An active contributor to major robotics software foundations including ArduPilot and ros-controls, focusing on system reliability, simulation compatibility, and community features.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Contributions</h2>
          <ul>
            <li><strong>Community Sustainability:</strong> Strengthened community funding infrastructure by adding a direct donation feature to the heavily-used ArduPilot CustomBuild repository.</li>
            <li><strong>CI Quality:</strong> Improved CI reliability by writing a robust timeout detection script to actively prevent stalled builds in the ArduPilot CustomBuild workflows.</li>
            <li><strong>Documentation:</strong> Enhanced documentation accuracy by thoroughly updating the ViewPro gimbal firmware compatibility guidelines within the ArduPilot Wiki.</li>
            <li><strong>ROS Sandbox:</strong> Restored vital ROS2–Gazebo compatibility by correcting outdated and broken SDF file references directly in the gz_ros2_control repository.</li>
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
