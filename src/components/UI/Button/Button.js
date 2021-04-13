import React from "react";
import classes from "./Button.module.css";

const button = props => (
  <div className={classes.button}>
    <span className={classes.button_text}>{props.children}</span>
  </div>
);

export default button;
