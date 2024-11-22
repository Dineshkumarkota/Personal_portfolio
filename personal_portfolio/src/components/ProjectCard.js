import React, { useState } from "react";
import { Button } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import "../styles/ProjectCard.css";


function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const toggleViewMore = () => {
    setExpanded(!expanded);
  };

  return (
    
            <div className="project-card">
      <div className="project-image-container">
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images}
            alt={project.images.alt}
            className="project-image"
            loading="lazy"
          />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-date">{project.date}</p>
        <p className="project-overview">{project.overview}</p>

        {expanded && (
          <div className="project-details">
            <h4>Details:</h4>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <h4>Skills Used:</h4>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Scope of Work:</h4>
            <ul>
              {project.details.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          
          </div>
        )}

        <Button
          variant="text"
          color="violet"
          onClick={toggleViewMore}
          style={{ marginTop: "10px" }}
        >
          {expanded ? "View Less" : "View More"}
        </Button>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHub style={{ fontSize: 30, marginRight: 15 }} />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Launch style={{ fontSize: 30 }} />
            </a>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default ProjectCard;





