import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

export const WildhawkDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>WildHawk - Project Details</title>
          <meta name="description" content="WildHawk - Edge-AI Driven UAV for Real-Time Wildlife Surveillance" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">WildHawk</h1>
          <p className="project-subtitle">Edge-AI Driven UAV for Real-Time Wildlife Surveillance</p>
        </div>

        <div className="project-section">
          <h2>Overview</h2>
          <p>
            WildHawk is an autonomous UAV system designed to mitigate Human-Wildlife Conflict (HWC) through real-time animal detection and autonomous deterrence. Unlike passive monitoring drones, WildHawk integrates onboard Edge AI with ROS 2-based flight control to detect wildlife in real-time and execute autonomous deterrence trajectories without ground-station latency.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop" alt="WildHawk drone in wildlife surveillance" />
          </div>
        </div>

        <div className="project-section">
          <h2>The Problem</h2>
          <p>
            Human-Wildlife Conflict is an escalating issue in agricultural and peri-urban zones. Animals like elephants and nilgai invade crop fields, causing economic loss and threatening both human and animal safety. Traditional deterrence methods are dangerous for humans and ineffective at scale.
          </p>
          <p>
            WildHawk solves this through autonomous perception-to-action pipeline: detect wildlife, compute deterrence vectors, and command the drone to position itself strategically - all within 150ms, enabling true autonomous response without human intervention.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1602491453631-e2a5ad90b131?w=600&h=400&fit=crop" alt="Wildlife monitoring and conservation" />
          </div>
        </div>

        <div className="project-section">
          <h2>Technical Approach</h2>
          <h3>System Architecture</h3>
          <p>
            WildHawk uses a hierarchical control architecture with three primary components:
          </p>
          <ul>
            <li><strong>Flight Controller (Pixhawk Cube Orange+):</strong> Running PX4 Autopilot for real-time attitude estimation and motor control</li>
            <li><strong>Companion Computer (Raspberry Pi 4):</strong> Executing vision pipeline and ROS 2 middleware for autonomous decision-making</li>
            <li><strong>Internal Bridge (UART Serial):</strong> Fast communication between flight controller and companion computer</li>
          </ul>

          <h3>Edge AI Pipeline</h3>
          <p>
            MobileNetV2 SSD model is quantized for TensorFlow Lite and runs directly on Raspberry Pi CPU. The system achieves 28 FPS inference speed with 35ms latency, enabling real-time tracking of multiple animal targets. INT8 quantization reduces model size to 4.2 MB while maintaining 85% detection accuracy.
          </p>

          <h3>Control Strategy</h3>
          <p>
            The autonomous behavior follows a state machine:
          </p>
          <ul>
            <li><strong>Patrol Mode:</strong> Follow pre-defined survey patterns over protected zones</li>
            <li><strong>Acquisition Mode:</strong> Upon valid detection, halt and center target in frame using PID control</li>
            <li><strong>Deterrence Mode:</strong> Descend to safe altitude (10m) and position drone to induce animal movement away from crop field</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" alt="System architecture and hardware components" />
          </div>
        </div>

        <div className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Edge Intelligence:</strong> All processing happens onboard - no reliance on cloud or ground stations</li>
            <li><strong>Real-Time Autonomy:</strong> Sub-150ms latency enables true autonomous deterrence behavior</li>
            <li><strong>Robust Detection:</strong> 85% accuracy under variable lighting conditions and rapid animal motion</li>
            <li><strong>Safety-First:</strong> Multiple failsafes (geofencing, battery monitoring, link loss handlers, wind resilience)</li>
            <li><strong>Cost-Effective:</strong> Raspberry Pi and consumer-grade components keep system cost accessible</li>
            <li><strong>Scalable:</strong> ROS 2 modular design allows easy integration of additional sensors and algorithms</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1569025696814-9c4d1b4f4c3a?w=600&h=400&fit=crop" alt="Autonomous drone flight and deterrence capabilities" />
          </div>
        </div>

        <div className="project-section">
          <h2>Validation & Results</h2>
          <div className="highlight-box">
            <h3>Achieved Metrics (InterIIT Tech Meet 13.0)</h3>
            <p>
              <strong>Detection Accuracy:</strong> 85% under variable lighting conditions<br/>
              <strong>System Latency:</strong> &lt;150ms (Camera → Motor Response)<br/>
              <strong>Inference Speed:</strong> 35ms per frame (28 FPS)<br/>
              <strong>Power Consumption:</strong> &lt;10W edge compute system<br/>
              <strong>Flight Stability:</strong> Maintained in 15 km/h wind gusts
            </p>
          </div>
          <p>
            Outdoor flight tests with simulated animal targets demonstrated seamless transitions between patrol and offboard control modes. The system successfully executed autonomous deterrence trajectories with zero personnel intervention, validating the practical feasibility of edge-AI driven wildlife management.
          </p>
        </div>

        <div className="project-section">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Flight Control:</strong> PX4 Autopilot, Pixhawk Cube Orange+</li>
            <li><strong>Robotics Middleware:</strong> ROS 2 Humble, MAVLink Protocol</li>
            <li><strong>AI/Vision:</strong> TensorFlow Lite, MobileNetV2 SSD, OpenCV, Centroid Tracking</li>
            <li><strong>Companion Computer:</strong> Raspberry Pi 4B (8GB), Industrial Camera</li>
            <li><strong>Development:</strong> Python, C++, Git & GitHub</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Future Scope</h2>
          <ul>
            <li><strong>Thermal Imagery:</strong> Add infrared sensors for night-time surveillance and accurate temperature monitoring</li>
            <li><strong>NPU Acceleration:</strong> Migrate to Jetson Nano or similar for higher frame rates and more complex models</li>
            <li><strong>Multi-Agent Coordination:</strong> Implement swarm logic for fleet coverage of large protected areas</li>
            <li><strong>Advanced Behavior Prediction:</strong> ML models to anticipate animal movement patterns and preempt conflicts</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Conclusion</h2>
          <p>
            WildHawk demonstrates the viability of edge-AI driven autonomous systems for addressing real-world ecological challenges. By validating the complete perception-to-action pipeline, the project opens pathways for scalable, cost-effective solutions to Human-Wildlife Conflict across agricultural regions globally.
          </p>
          <p>
            The project highlights how robotics and AI can serve humanitarian purposes - protecting both human livelihoods and wildlife welfare through intelligent, autonomous intervention.
          </p>
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
