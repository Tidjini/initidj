import React from "react";
import "../css/animate.css";
import "../css/style.css";

const {
  cvPicture,
  close,
  download,
  facebook,
  linkedIn,
  github
} = require("../Utils/const");

export default ({ display, onHideCv }) => {
  return (
    <div
      className="cv-container fadeIn animated"
      id="cv-me"
      style={{ display: display }}
    >
      <div className="outils">
        <a href="#" onClick={onHideCv}>
          <img src={close} alt="" />
        </a>
        <a href="#">
          <img src={download} alt="" />
        </a>
      </div>
      <div className="cv ">
        <div className="cv-personal slideInLeft animated">
          <img src={cvPicture} className="cv-image" />
          <div className="cv-personal-information">
            <div className="cv-personal-information-element">
              <h3>Address</h3>
              <h4>56, Avenue Hamou Mokhtar Al-Makkari, Oran Algerie</h4>
            </div>
            <div className="cv-personal-information-element">
              <h3>Email</h3>
              <h4>tidjini.messaoudi@gmail.com</h4>
            </div>
            <div className="cv-personal-information-element">
              <h3>Phone</h3>
              <h4>+213 541 72 64 72</h4>
            </div>
            <div className="cv-personal-information-element">
              <h3>Find Me On</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src={github} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={linkedIn} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-right-side slideInUp fadeIn animated">
          <div className="cv-information ">
            <h1>EDUCATION</h1>
            <div className="cv-information-element">
              <h3>Master en informatique</h3>
              <p>
                Spécialité​: Ingénierie des Systèmes d'Information
                <br /> Université des sciences et de la technologie
                <br /> d'Oran - Mohamed Boudiaf
              </p>
              <h5>Juin 2015</h5>
            </div>
            <div className="cv-information-element">
              <h3>License en informatique</h3>
              <p>
                Université des sciences et de la technologie
                <br /> d'Oran - Mohamed Boudiaf
              </p>
              <h5>Juin 2013</h5>
            </div>
          </div>

          <div className="cv-information fadeIn animated">
            <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
            <div className="cv-information-element">
              <h3>Gérant dans un cybercafé</h3>

              <h5>2013 - 2014</h5>
            </div>
            <div className="cv-information-element">
              <h3>Développeur chez iTech Solutions (Oran)</h3>
              <p>
                {" "}
                - Etude et réalisation d'applications webs et mobiles.
                <br /> - Réalisation d'interfaces graphiques.
                <br /> - Chef de projet ChicResturant ​(application android pour
                uniCenta oPos).
              </p>
              <h5>2014 - 2015</h5>
            </div>
            <div className="cv-information-element">
              <h3>Développeur chez OralogSoft</h3>
              <p>
                {" "}
                - Etude et réalisation de logiciels sous .Net Framework.
                <br /> - L'un des développeurs de OLS-LB​ (Application de
                gestion de laboratoire).
                <br /> - L'un des développeurs de OLS-P2​ (Système de gestion de
                production pharmaceutique).
                <br /> - Développeur de OLS-CP​ (logiciel de gestion commercial)
              </p>
              <h5>Depuis 2015</h5>
            </div>
          </div>
          <div className="cv-competence fadeIn animated">
            <h1>COMPÉTENCES</h1>
            <div className="cv-competence-element">
              <h3>Language métrisé</h3>
              <p>C#, JAVA, JAVASCRIPT</p>
            </div>
            <div className="cv-competence-element">
              <h3>Base de données</h3>
              <p>MySql, Sql Server, Mongo DB</p>
            </div>
            <div className="cv-competence-element">
              <h3>Markup Language</h3>
              <p>HTML, CSS, XML, XAML</p>
            </div>
            <div className="cv-competence-element">
              <h3>Frameworks et librirés</h3>
              <p>Node, React, React Native, Express, Redux, </p>
            </div>
            <div className="cv-competence-element">
              <h3>Outils</h3>
              <p>Visual Studio, Android Studio, Rider, Visual Code, Atom </p>
            </div>
            <div className="cv-competence-element">
              <h3>Services</h3>
              <p>Github, Team Fundation, Firebase, App center, Npm ... </p>
            </div>
          </div>

          <div className="cv-information fadeIn animated">
            <h1>PREFERNECE ACTUEL</h1>
            <div className="cv-information-element">
              <p>
                {" "}
                Tous ce qui en relation avec le web, API, web application,
                cross-platform application, UI/UX
              </p>
            </div>
          </div>
          <div className="cv-information fadeIn animated">
            <h1>IMPORTANT</h1>
            <div className="cv-information-element">
              <p>
                {" "}
                SI EN AUCUN CAS VOUS AVEZ BESOIN DE MOI, ET QUE VOUS avez
                devoloper VOS SERVICES AVEC D'AUTRES LANGAGES QUI NE FIGURE PAS
                DANS MA LISTE DE COMPÉTENCE, JE SUIS PRÈS A INTÉGRER VOTRE
                ÉQUIPE (give me just 10 days for learning)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
