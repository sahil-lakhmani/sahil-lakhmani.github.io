import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

import coverImg from "../../assets/images/mine_mapper.png";

export const MineMapperDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mine Mapper - Sahil Lakhmani</title>
          <meta name="description" content="Mine Mapper - Low-Cost UAV for 3D Aerial Mapping" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Mine Mapper</h1>
          <p className="project-subtitle">Low-Cost UAV for 3D Aerial Mapping of Surface Mines</p>
        </div>

        <div className="project-image">
          <img src={coverImg} alt="Mine Mapper UAV" />
        </div>

        <div className="project-section">
          <h2>Overview & Impact</h2>
          <p>
            Architected a ROS-based autonomous UAV mapping system integrating RTK/PPK GNSS and synchronized camera triggering, enabling fully automated, centimeter-level aerial surveys in surface mine environments under the guidance of Dr. Tarun Verma.
          </p>
        </div>

        <div className="project-section">
          <h2>Technical Architecture</h2>
          <ul>
            <li>Engineered a Structure-from-Motion (SfM) pipeline using OpenDroneMap to generate dense 3D point clouds and georeferenced orthomosaics from calibrated UAV imagery context mapping.</li>
            <li>Designed a system capable of fully autonomous flights with high-accuracy GNSS data logging.</li>
            <li>Implemented ROS nodes for telemetry tracking alongside camera payloads.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Validation & Results</h2>
          <p>
            Validated full system performance in field deployments, proving that this setup effectively reduces physical survey cost by 90% and time by 75% compared to traditional operations.
          </p>
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
