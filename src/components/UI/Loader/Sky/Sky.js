import React from "react";
import classes from "./Sky.module.css";

const sky = () => {
  return (
    <div className={classes.sky}>
      <div className={[classes.star1, classes.star].join(" ")}></div>
      <div className={[classes.star2, classes.star].join(" ")}></div>
      <div className={[classes.star3, classes.star].join(" ")}></div>
      <div className={[classes.star4, classes.star].join(" ")}></div>
      <div className={[classes.star5, classes.star].join(" ")}></div>
    </div>
  );
};

export default sky;
