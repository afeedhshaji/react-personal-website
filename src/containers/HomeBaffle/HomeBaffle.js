import React, { Component } from "react";
import Baffle from "baffle-react";
import classes from "./HomeBaffle.module.css";

class HomeBaffle extends Component {
  state = {
    obfuscate: this.props.obfus
  };
  render() {
    console.log(this.props.obfus);
    return (
      <h1 className={classes.mainHeading}>
        <Baffle
          className={classes.mainHeading}
          speed={85}
          characters='Afeedh Shaji'
          obfuscate={this.props.obfus}
          revealDuration={500}
          revealDelay={0}
        >
          Hello! I'm Afeedh Shaji
        </Baffle>
      </h1>
    );
  }
}

export default HomeBaffle;
