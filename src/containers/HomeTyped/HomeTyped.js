import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import classes from "./HomeTyped.module.css";

const Strings = [
  "I'm a Developer.",
  "I'm a ML/DL Enthusiast.",
  "I'm a Programmer.",
  "I'm a Designer."
];

const homeTyped = props => (
  <div className={classes.typedWrapper}>
    <Typed strings={Strings} typeSpeed={80} loop backSpeed={80} />
  </div>
);

export default homeTyped;
