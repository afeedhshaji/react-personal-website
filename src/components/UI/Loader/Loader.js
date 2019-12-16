import React from "react";
import classes from "./Loader.module.css";
import Ironman from "./Ironman/Ironman";
import Sky from "./Sky/Sky";

const loader = props => {
  console.log(props.show);
  let attachedClasses = [classes.preloader];
  attachedClasses[1] = props.show === "exiting" ? null : classes.hide;
  console.log(attachedClasses);
  return (
    <div className={attachedClasses.join(" ")}>
      <Ironman />
      <Sky />
    </div>
  );
};

export default loader;
