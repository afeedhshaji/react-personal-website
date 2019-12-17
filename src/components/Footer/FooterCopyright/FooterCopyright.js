import React from "react";
import classes from "./FooterCopyright.module.css";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../assets/css/fa.css";

const footerCopyright = () => {
  return (
    <div className={classes.footer__copyright}>
      <div className={classes.bottom}>
        &copy; 2019, Afeedh Shaji{" "}
        <a
          className={["socialIcon", "leftPadding"].join(" ")}
          href='https://github.com/afeedh'
        >
          <i className='fa fa-github'></i>
        </a>
      </div>
    </div>
  );
};

export default footerCopyright;
