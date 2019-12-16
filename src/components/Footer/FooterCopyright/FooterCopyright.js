import React from "react";
import classes from "./FooterCopyright.module.css";

const footerCopyright = () => {
  return (
    <div className={classes.footer__copyright}>
      <div className={classes.bottom}>&copy; 2019, Afeedh Shaji</div>
    </div>
  );
};

export default footerCopyright;
