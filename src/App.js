import React, { Component } from "react";

import "./css/animate.css";
import "./css/style.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Description from "./components/Description";
import Project from "./components/Project";

const { projectImages } = require("./Utils/const");

class App extends Component {
  render() {
    return (
      <div id="content" className="fadeIn animated">
        <Header />
        <Description />
        <Project
          projectName="Instashop"
          projectImage={projectImages[0]}
          projectDescription="You're craving but feeling lazy to leave home and the fridge is empty? There's a new kind of food delivery in New York."
          active
        />
        <Project
          projectName="Instashop"
          projectImage={projectImages[1]}
          projectDescription="You're craving but feeling lazy to leave home and the fridge is empty? There's a new kind of food delivery in New York."
        />
        <Project
          projectName="Instashop"
          projectImage={projectImages[2]}
          projectDescription="You're craving but feeling lazy to leave home and the fridge is empty? There's a new kind of food delivery in New York."
        />
        <Project
          projectName="Instashop"
          projectImage={projectImages[3]}
          projectDescription="You're craving but feeling lazy to leave home and the fridge is empty? There's a new kind of food delivery in New York."
        />
        <Footer />
      </div>
    );
  }
}

export default App;
