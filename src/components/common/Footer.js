import React from "react";
const Header = () => {
  return (
    <footer className="details-footer slideInUp fadeIn animated">
      <div className="details-footer-content">
        <div className="details-footer-element">
          <h6 className="details-footer-element-header">Send us an email</h6>
          <a href="#" className="details-footer-element-content">
            <h3>tidjini.messaoudi@gmail.com</h3>
          </a>
        </div>
        <div className="details-footer-element">
          <h6 className="details-footer-element-header">
            Look for us elsewhere
          </h6>
          <a href="#" className="details-footer-element-content">
            <h3>Github</h3>
          </a>
          <a href="#" className="details-footer-element-content">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </footer>
  );
};
