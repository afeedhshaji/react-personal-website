import React from "react";
import classes from "./SkillBox.module.css";

const skillBox = props => {
  return <div className={classes.project__used__item}>{props.children}</div>;
};

export default skillBox;
