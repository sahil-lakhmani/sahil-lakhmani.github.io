import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

export const MeddyBuddyDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MeddyBuddy - Project Details</title>
          <meta name="description" content="MeddyBuddy - Autonomous UAV for Medical Diagnostics & Emergency Response" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">MeddyBuddy</h1>
          <p className="project-subtitle">Autonomous UAV System for Medical Diagnostics & Emergency Response</p>
        </div>

        <div className="project-section">
          <h2>Overview</h2>
          <p>
            MeddyBuddy is an autonomous UAV system engineered to bridge the logistical gap in emergency medical response. The system rapidly deploys medical supplies and diagnostic samples to disaster-stricken and remote regions where traditional infrastructure is compromised. Validated through high-fidelity Software-in-the-Loop (SITL) simulation, MeddyBuddy demonstrates the feasibility of drone-based healthcare logistics networks.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1576091160550-112173fba4b7?w=600&h=400&fit=crop" alt="Medical UAV delivery system" />
          </div>
        </div>

        <div className="project-section">
          <h2>The Problem</h2>
          <p>
            Traditional medical supply chains fail in disaster scenarios (floods, earthquakes) and remote locations, creating critical delays in diagnostic sample retrieval and emergency aid delivery. Even in developed regions, reaching isolated communities is slow and resource-intensive. Traditional road-based delivery is impossible in inaccessible terrain.
          </p>
          <p>
            MeddyBuddy addresses this challenge through autonomous medical delivery: a low-cost, rapidly deployable platform that transports sensitive medical payloads with proven reliability, validated entirely in simulation before physical deployment.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop" alt="Emergency medical response in disaster zones" />
          </div>
        </div>

        <div className="project-section">
          <h2>System Architecture</h2>
          <h3>Three-Tier Architecture</h3>
          <p>
            MeddyBuddy uses a decentralized control architecture with three components communicating via MAVLink protocol:
          </p>
          <ul>
            <li><strong>Physics Simulation (Gazebo Garden):</strong> Simulates drone dynamics, aerodynamics, gravity, wind, and environmental constraints</li>
            <li><strong>Flight Control (ArduPilot SITL):</strong> Runs C++ flight code identical to physical hardware, receiving sensor data and commanding motors</li>
            <li><strong>Mission Computer (Python):</strong> High-level automation using dronekit and pymavlink for state machine logic and waypoint navigation</li>
          </ul>

          <h3>Hardware Components</h3>
          <ul>
            <li><strong>Vehicle:</strong> ArduCopter Iris Quadcopter with modular payload bay</li>
            <li><strong>Flight Controller:</strong> ArduPilot-compatible stack with GUIDED mode autonomous control</li>
            <li><strong>Telemetry:</strong> MAVLink communication via UDP for Ground Control Station monitoring</li>
            <li><strong>Payload:</strong> 3D-printed damping mounts (PLA/PETG) protecting sensitive medical samples</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop" alt="System architecture and control flow" />
          </div>
        </div>

        <div className="project-section">
          <h2>Mission Workflow</h2>
          <p>
            MeddyBuddy executes missions through a well-defined state machine:
          </p>
          <ul>
            <li><strong>Step 1 - Initialization:</strong> Establish heartbeat connection, verify GPS lock and EKF stability</li>
            <li><strong>Step 2 - Arming:</strong> Electronically arm motors and switch to GUIDED flight mode</li>
            <li><strong>Step 3 - Navigation:</strong> Upload geodetic waypoints and navigate with &lt;2m target threshold</li>
            <li><strong>Step 4 - Landing:</strong> Trigger precision landing at final waypoint</li>
          </ul>

          <h3>Failsafes & Safety</h3>
          <ul>
            <li><strong>Battery Protection:</strong> Automatic RTL (Return to Launch) on low voltage</li>
            <li><strong>Link Loss:</strong> Automatic home return if communication fails</li>
            <li><strong>Geofencing:</strong> Hard-coded GPS boundaries prevent drift into no-fly zones</li>
            <li><strong>Timeout Protection:</strong> Mission abort if waypoint timeout exceeded</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Mission execution flow and state transitions" />
          </div>
        </div>

        <div className="project-section">
          <h2>Payload Design</h2>
          <p>
            Specialized hardware design ensures safe transportation of temperature-sensitive medical samples:
          </p>
          <ul>
            <li><strong>CAD Design:</strong> Modular attachment designed in SolidWorks/Fusion360 for quick deployment and payload swapping</li>
            <li><strong>3D Fabrication:</strong> Printed in PLA/PETG materials selected for high strength-to-weight ratio</li>
            <li><strong>Vibration Isolation:</strong> Passive damping mounts absorb motor vibrations protecting samples</li>
            <li><strong>Weight Optimization:</strong> Lightweight design minimizes impact on flight time while maintaining strength</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop" alt="Payload design and CAD modeling" />
          </div>
        </div>

        <div className="project-section">
          <h2>Simulation & Validation</h2>
          <p>
            MeddyBuddy was developed and validated entirely in high-fidelity simulation:
          </p>
          <ul>
            <li><strong>Platform:</strong> Ubuntu Linux with full ArduPilot ecosystem</li>
            <li><strong>Physics:</strong> Gazebo Garden with gz-ros2-control for realistic simulation</li>
            <li><strong>Visualization:</strong> QGroundControl (QGC) for real-time mission monitoring</li>
            <li><strong>Automation:</strong> Python scripts with dronekit library for high-level control</li>
          </ul>

          <h3>Validation Results</h3>
          <div className="highlight-box">
            <p>
              <strong>Navigation Accuracy:</strong> ±0.5m waypoint hold under wind conditions<br/>
              <strong>Mission Reliability:</strong> 20+ consecutive successful autonomous sorties<br/>
              <strong>GCS Latency:</strong> &lt;50ms telemetry communication<br/>
              <strong>Flight Cycle:</strong> Full autonomous execution (Arm → Takeoff → Navigate → Land)
            </p>
          </div>
        </div>

        <div className="project-section">
          <h2>Key Advantages</h2>
          <ul>
            <li><strong>Medical-Grade Reliability:</strong> Purpose-built for transporting fragile diagnostic samples safely</li>
            <li><strong>Rapid Deployment:</strong> Low-cost platform with modular design for quick assembly</li>
            <li><strong>Validated in Simulation:</strong> High-fidelity SITL ensures mission success before physical deployment</li>
            <li><strong>All-Terrain Capable:</strong> No dependency on ground infrastructure - reaches any location</li>
            <li><strong>Autonomous & Safe:</strong> Full autonomy with multiple failsafes and human override</li>
            <li><strong>Scalable Architecture:</strong> Extensible design supports multi-agent swarms for large emergency zones</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Flight Control:</strong> ArduPilot SITL, PX4 compatible</li>
            <li><strong>Simulation:</strong> Gazebo Garden, gz-ros2-control</li>
            <li><strong>Mission Automation:</strong> Python 3, DroneKit, MAVLink Protocol</li>
            <li><strong>Development:</strong> Ubuntu Linux, QGroundControl, CAD software</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Future Development</h2>
          <ul>
            <li><strong>Computer Vision:</strong> Add Raspberry Pi/Jetson Nano with OpenCV for ArUco marker landing</li>
            <li><strong>Swarm Coordination:</strong> Multi-agent fleet control for larger emergency zones</li>
            <li><strong>Hardware Deployment:</strong> Port validated code to physical Pixhawk 6C system</li>
            <li><strong>Thermal Integration:</strong> Insulated payload bay with temperature monitoring</li>
            <li><strong>Advanced Autonomy:</strong> ML-based obstacle avoidance and dynamic replanning</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Conclusion</h2>
          <p>
            MeddyBuddy demonstrates a successful implementation of a mission-critical autonomous system for healthcare logistics. By leveraging industry-standard tools like ArduPilot and Gazebo, the project bridges the gap between theoretical control strategies and practical emergency response deployment.
          </p>
          <p>
            The system highlights robotics' potential to solve "last-mile" healthcare challenges, offering a scalable, cost-effective foundation for autonomous telemedicine networks in disaster and remote scenarios globally.
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
