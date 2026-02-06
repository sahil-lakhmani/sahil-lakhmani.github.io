import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="project-list mb-5">
          {dataportfolio.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div key={index} className="project-section">
                <div
                  className={`project-row ${
                    isReversed ? "project-row-reverse" : ""
                  }`}
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    {project.summary && (
                      <p className="project-summary">{project.summary}</p>
                    )}

                    <div className="project-actions">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button code-button"
                        >
                          → Code
                        </a>
                      )}
                      {project.detailLink && (
                        <Link
                          to={project.detailLink}
                          className="project-button website-button"
                        >
                          ↗ Website
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
