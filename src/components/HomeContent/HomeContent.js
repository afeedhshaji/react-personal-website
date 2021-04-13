import React from "react";
import Button from "../UI/Button/Button";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../assets/css/fa.css";
import classes from "./HomeContent.module.css";
import { Link } from "react-router-dom";

// const paras = [
//   "Pursuing B.Tech in Computer Science Engineering at NIT Calicut.",
//   "Find my repos and contributions at",
//   "I design too. Sometimes I post them at",
//   "<Button>Projects</Button> at a glance.",
//   "Are you hiring? Then do check out my Resume"
// ];

const homeContent = () => {
  return (
    <div>
      <div className={classes.para}>
        <i className='fa fa-check'></i>
        Pursuing B.Tech in Computer Science Engineering at NIT Calicut.
      </div>
      <div className={classes.para}>
        <i className='fa fa-check'></i>Find my repos and contributions at{" "}
        <i className='fa fa-github'></i>
        <i className='fa fa-gitlab'></i>
      </div>
      <div className={classes.para}>
        <i className='fa fa-check'></i>
        <Link to='/projects'>
          <Button>
            <span className='fa fa-external-link-square button_icon'></span>
            Projects
          </Button>
        </Link>{" "}
        at a glance.
      </div>
      <div className={classes.para}>
        <i className='fa fa-check'></i>I design too. Sometimes I post them at{" "}
        <a href='github.com/afeedh'>
          <i className='fa fa-behance'></i>
        </a>
        <a href='github.com/afeedh'>
          <i className='fa fa-dribbble'></i>
        </a>
      </div>

      <div className={classes.para}>
        <i className='fa fa-check'></i>Are you hiring? Then do check out my{" "}
        <Button>
          <span className='fa fa-external-link-square button_icon'></span>Résumé
        </Button>
      </div>
    </div>
  );
};

export default homeContent;
