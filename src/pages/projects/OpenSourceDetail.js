import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

export const OpenSourceDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contributions = [
    {
      id: 1,
      title: "Added Timed-Out Build State in ArduPilot",
      repo: "ArduPilot CustomBuild Repository",
      description: "Added a Timed-Out build state in the ArduPilot CustomBuild repository to handle stalled builds and clearly report build failures, resolving issue #201 via PR #204.",
      link: "https://github.com/ArduPilot/CustomBuild/pull/204"
    },
    {
      id: 2,
      title: "Updated ArduPilot Wiki Documentation",
      repo: "ArduPilot Wiki",
      description: "Updated ArduPilot Wiki to align ViewPro gimbal documentation with current support in PR #7309.",
      link: "https://github.com/ArduPilot/ardupilot/pull/7309"
    },
    {
      id: 3,
      title: "Fixed Outdated SDF Specification Links",
      repo: "gz_ros2_control",
      description: "Fixed outdated SDF specification links in gz_ros2_control resolving issue #749 through PR #756.",
      link: "https://github.com/ros-controls/gz_ros2_control/pull/756"
    }
  ];

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Open Source Contributions</title>
          <meta name="description" content="Open Source Contributions - ArduPilot, ros-controls, PX4, and more" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Open Source Contributions</h1>
          <p className="project-subtitle">Supporting the Global Robotics Community</p>
        </div>

        <div className="project-section">
          <h2>About</h2>
          <p>
            Open-source projects form the backbone of modern robotics development. Through contributions to industry-standard platforms like ArduPilot, ros-controls, and PX4, I've worked to improve flight control systems, enhance simulation capabilities, and enable better integration between hardware and software stacks.
          </p>
          <p>
            These contributions address real-world challenges discovered during the development of research and commercial UAV projects, and benefit thousands of developers worldwide working on autonomous systems.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" alt="Open source robotics development" />
          </div>
        </div>

        <div className="project-section">
          <h2>Contributions</h2>
          <div className="contributions-list">
            {contributions.map((item) => (
              <div key={item.id} className="contribution-item">
                <h3>{item.title}</h3>
                <p className="contribution-repo"><strong>Repository:</strong> {item.repo}</p>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contribution-link">
                  View PR →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="project-section">
          <h2>Technologies & Exposure</h2>
          <p>
            <strong>Tech Stack:</strong> ArduPilot, ROS 2, Gazebo, ros2_control, SDF, Git, CI/CD Pipeline
          </p>
          <ul>
            <li>Flight control systems and autopilot firmware</li>
            <li>Robotics middleware and hardware interfaces</li>
            <li>Simulation frameworks and physics engines</li>
            <li>Build systems and continuous integration</li>
            <li>Version control and collaborative development</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Focus Areas</h2>
          <ul>
            <li><strong>Flight Control Systems:</strong> Contributions to ArduPilot and PX4 focusing on sensor fusion, state estimation, and autonomous control</li>
            <li><strong>Robotics Middleware:</strong> Enhanced ROS 2 integration with hardware interfaces and communication protocols</li>
            <li><strong>Simulation & Physics:</strong> Improved Gazebo physics models and rendering for accurate UAV simulation</li>
            <li><strong>Data Processing:</strong> Optimization of geospatial processing pipelines for large-scale mapping</li>
            <li><strong>Developer Tools:</strong> Command-line utilities and interfaces that simplify development workflows</li>
          </ul>
        </div>

        <div className="project-section">
        </div>

        <div className="action-buttons">
          <a href="#" target="_blank" rel="noopener noreferrer" className="action-button">
            View Code
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="action-button">
            View Report
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
