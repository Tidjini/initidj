import React from "react";
import "../css/animate.css";
import "../css/style.css";
export default ({ description, shortInformation }) => {
  const descriptionText =
    description ||
    "We work with startups and agencies to design beatiful & awsome digital experiences";
  const shortInformationText =
    shortInformation ||
    " by doing branding, user research, UX & UI design and user testing until we nail it.";
  return (
    <div className="main-description" style={{ display: "inline-block" }}>
      <div className="description">
        <h1> {descriptionText}</h1>
      </div>
      <div className="short-information">
        <h4>{shortInformationText}</h4>
      </div>
    </div>
  );
};
