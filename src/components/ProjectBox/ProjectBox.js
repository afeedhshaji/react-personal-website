import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ProjectBox.module.css";
import "../../assets/css/fa.css";
import SkillBox from "../UI/SkillBox/SkillBox";
import PROJECT_API from "../../constants/api";

class projectBox extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    console.log("Mounted");
    fetch(PROJECT_API)
      .then(res => res.json())
      .then(projects =>
        this.setState({ projects }, () =>
          console.log("Projects fetched...", projects)
        )
      );
  }

  linearArrayToGridArray() {
    let gridArray = [[]];
    let totalColumns = 2;
    let countColumns = 1;
    for (var i = 0; i < this.state.projects.length; i++) {
      gridArray[gridArray.length - 1].push(this.state.projects[i]);
      if (countColumns <= totalColumns) {
        countColumns++;
      }
      if (countColumns > totalColumns && i !== this.state.projects.length - 1) {
        countColumns = 1;
        gridArray.push([]);
      }
    }
    return gridArray;
  }

  renderProjects(gridArray) {
    return gridArray.map((row, idx1) => (
      <div key={idx1} className="row justify-content-center">
        {row.map((col, idx2) => (
          <div key={idx2} className={classes.project}>
            <div className={classes.projectInner}>
              <div className={classes.project__name}>
                <a
                  className={classes.arrowLink}
                  href={col.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {col.title}
                </a>
                {col.type === "github" ? (
                  <i className="fa project-icon fa-github"></i>
                ) : col.type === "gitlab" ? (
                  <i className="fa project-icon fa-gitlab"></i>
                ) : null}
              </div>
              <p>{col.desc}</p>
              <div className={classes.job__time}>{col.time}</div>
              <div className={classes.project__used}>
                {col.used.map((used, idx3) => (
                  <SkillBox key={idx3}>{used}</SkillBox>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  }

  render() {
    let gridArray = this.linearArrayToGridArray();
    return (
      <div className="container">
        <div className={classes.mainHeading}>Projects</div>
        {this.renderProjects(gridArray)}
      </div>
    );
  }
}

export default projectBox;
