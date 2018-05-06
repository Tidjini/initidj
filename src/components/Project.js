import React from "react";
import "../css/animate.css";
import "../css/style.css";

export default ({
  projectImage,
  projectName,
  projectDescription,
  projectId,
  active
}) => {
  const buttonClasses = active ? "primary-button" : "primary-button disabled";
  const buttonLabel = active ? "Plus de Détails" : "Bientôt";
  return (
    <div className="project" style={{ display: "inline-block" }}>
      <img className="project-cover" src={projectImage} />

      <div className="project-image" />

      <div className="project-description">
        <div className="project-name">
          <h1>{projectName}</h1>
        </div>
        <div className="project-information">
          <h4>{projectDescription}</h4>
        </div>
        <div className={buttonClasses}>
          <a href="#">{buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};
