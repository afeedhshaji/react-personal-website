import React from "react";
import classes from "./Loader.module.css";
import Ironman from "./Ironman/Ironman";
import Sky from "./Sky/Sky";

const loader = props => {
  return (
    <div className={classes.preloader}>
      <Ironman />
      <Sky />
    </div>
  );
};

export default loader;
