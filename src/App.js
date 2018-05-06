import React, { Component } from "react";

import "./css/animate.css";
import "./css/style.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Description from "./components/Description";
import Project from "./components/Project";
import Cv from "./components/Cv";

const { projectImages } = require("./Utils/const");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayCv: "none", displayContent: "inline-block" };
  }
  displayCv() {
    console.log("display cv");
    this.setState({
      displayCv: "inline-block",
      displayContent: "none"
    });
  }
  hideCv() {
    console.log("hide cv");
    this.setState({
      displayCv: "none",
      displayContent: "inline-block"
    });
  }
  render() {
    return (
      <div>
        <div
          id="content"
          className="fadeIn animated"
          style={{ display: this.state.displayContent }}
        >
          <Header onCvClick={this.displayCv.bind(this)} />
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
        <Cv display={this.state.displayCv} onHideCv={this.hideCv.bind(this)} />
      </div>
    );
  }
}

export default App;
