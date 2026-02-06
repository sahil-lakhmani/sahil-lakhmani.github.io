import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./simple-project.css";

export const MineMapperDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Container className="simple-project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mine Mapper - Project Details</title>
          <meta name="description" content="Mine Mapper - Low-Cost UAV for 3D Aerial Mapping of Surface Mines" />
        </Helmet>

        <div className="project-header">
          <h1 className="project-title">Mine Mapper</h1>
          <p className="project-subtitle">Low-Cost UAV for 3D Aerial Mapping of Surface Mines</p>
        </div>

        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Mine Mapper is an autonomous UAV system designed for high-resolution 3D mapping and monitoring of surface mines. Using affordable consumer-grade quadcopter platforms and photogrammetry techniques, the system delivers mining-grade accuracy at a fraction of traditional surveying costs.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Mine Mapper - Aerial mining survey" />
          </div>
        </div>

        <div className="project-section">
          <h2>The Problem</h2>
          <p>
            Mining operations face significant challenges in surveying terrain and monitoring excavation progress. Traditional surveying methods are slow, dangerous, and expensive. Workers must access hazardous slopes and unstable areas. Commercial UAV solutions exist but are cost-prohibitive for many operations.
          </p>
          <p>
            Mine Mapper solves this by providing a low-cost, rapid-deployment solution using photogrammetry to create high-resolution 3D maps, orthomosaics, and volumetric analysis from aerial imagery.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1581092918037-02e0e4deba5c?w=600&h=400&fit=crop" alt="Mining operations and terrain challenges" />
          </div>
        </div>

        <div className="project-section">
          <h2>How It Works</h2>
          <h3>Flight Planning & Capture</h3>
          <p>
            The UAV follows a pre-programmed flight path with 75% forward and 60% side overlap for complete coverage. High-resolution images are captured from multiple angles (nadir and oblique views) to ensure robust 3D reconstruction.
          </p>
          
          <h3>Ground Control Points (GCPs)</h3>
          <p>
            DGPS-based ground control points are strategically placed across the survey area. These provide precise georeferencing and enable validation of mapping accuracy. The optimal GCP distribution depends on terrain characteristics and survey size.
          </p>
          
          <h3>Photogrammetry Processing</h3>
          <p>
            Using Structure-from-Motion (SfM) algorithms, the system reconstructs 3D point clouds, generates orthomosaics at 2-5 cm Ground Sample Distance (GSD), and produces Digital Elevation Models (DEMs). Advanced post-processing enables volumetric calculations for mining operations.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" alt="Photogrammetry workflow and 3D mapping" />
          </div>
        </div>

        <div className="project-section">
          <h2>Key Deliverables</h2>
          <p>Each survey produces comprehensive mining data in multiple formats:</p>
          <ul>
            <li><strong>Orthomosaic Maps:</strong> High-resolution aerial maps at 2-5 cm GSD for site documentation and analysis</li>
            <li><strong>3D Point Clouds:</strong> Dense point clouds enabling precise volume calculations and feature extraction</li>
            <li><strong>Digital Elevation Models:</strong> Both DSM (Digital Surface Model) and DTM (Digital Terrain Model) for topographic analysis</li>
            <li><strong>Volumetric Analysis:</strong> Automated stockpile volume calculations and excavation progress tracking</li>
            <li><strong>Slope Analysis:</strong> Detailed slope maps identifying stability issues and drainage patterns</li>
            <li><strong>Contour Maps:</strong> Traditional contour generation for compliance and planning</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Mapping deliverables and geospatial analysis" />
          </div>
        </div>

        <div className="project-section">
          <h2>Technical Challenges & Solutions</h2>
          
          <h3>Challenge 1: Image Stability & Overlap</h3>
          <p>
            Maintaining consistent image overlap and avoiding motion blur requires careful flight planning and stable conditions. Solution: Double-grid flight pattern with moderate speeds, 70° camera tilt for multi-angle capture, and wind condition monitoring.
          </p>
          
          <h3>Challenge 2: Accuracy Assessment</h3>
          <p>
            Validating mapping accuracy and ensuring RMSE values meet mining standards requires careful GCP placement and distribution. Solution: Use validation control points separate from georeferencing GCPs, calculate individual RMSE components (X, Y, Z), and redistribute GCPs if needed.
          </p>
          
          <h3>Challenge 3: Optimal GCP Count</h3>
          <p>
            Determining the right number of GCPs balances accuracy with field effort. For small mines (7-39 ha), 12 GCPs are typically optimal. For large sites (342+ ha), 18 GCPs provide better accuracy. Stockpile mapping requires fewer GCPs (5-10) due to smaller areas.
          </p>
          
          <h3>Challenge 4: RTK vs Standard GPS</h3>
          <p>
            RTK (Real-Time Kinematic) positioning provides cm-level accuracy but requires infrastructure and maintenance. Non-RTK methods are simpler but may have degraded accuracy. Solution: Choose based on project requirements - RTK for critical accuracy needs, standard GPS for general mapping.
          </p>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="GCP placement and accuracy assessment" />
          </div>
        </div>

        <div className="project-section">
          <h2>Hardware & Technology Stack</h2>
          <p>
            Mine Mapper uses industrial-grade components combined with affordable platforms:
          </p>
          <ul>
            <li><strong>UAV Platform:</strong> Quadcopter with redundant flight control systems</li>
            <li><strong>Imaging:</strong> Industrial-grade high-resolution camera with global shutter</li>
            <li><strong>Navigation:</strong> Multi-constellation GNSS (GPS, GLONASS, Galileo) for robust positioning</li>
            <li><strong>Positioning Option:</strong> RTK module for cm-level accuracy when required</li>
            <li><strong>Communication:</strong> Dual-frequency radio link with telemetry transmission</li>
            <li><strong>Processing:</strong> Commercial photogrammetry software (Pix4D, AgisoftMetashape) or open-source alternatives</li>
          </ul>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=600&h=400&fit=crop" alt="UAV hardware and drone technology" />
          </div>
        </div>

        <div className="project-section">
          <h2>Results & Impact</h2>
          <div className="highlight-box">
            <h3>Proven Performance</h3>
            <p>
              <strong>Accuracy:</strong> 1-5 cm horizontal, 5-20 cm vertical with proper GCP placement<br/>
              <strong>Coverage:</strong> Large mine sites (100+ hectares) in single missions<br/>
              <strong>Cost Reduction:</strong> 90% cheaper than traditional surveying methods<br/>
              <strong>Time Efficiency:</strong> Complete surveys in hours instead of weeks<br/>
              <strong>Safety:</strong> Zero personnel exposure to hazardous mining areas
            </p>
          </div>
          <p>
            Mine Mapper has demonstrated practical utility for volumetric analysis, slope monitoring, regulatory compliance, and mine planning. The system is scalable and can be deployed across multiple mine sites and operational scales.
          </p>
        </div>

        <div className="project-section">
          <h2>Conclusion</h2>
          <p>
            Mine Mapper represents a practical, cost-effective solution to mining surveying challenges. By combining affordable UAV technology with proven photogrammetry techniques, the system delivers professional-grade mapping data while improving safety and reducing operational costs.
          </p>
          <p>
            The approach validates that expensive, specialized systems are not always necessary. With proper planning, GCP management, and post-processing workflows, consumer-grade platforms can achieve mining-grade accuracy and become essential tools for modern mining operations.
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
