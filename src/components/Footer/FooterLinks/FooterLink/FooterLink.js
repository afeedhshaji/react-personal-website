import React from "react";
import classes from "./FooterLink.module.css";

const FooterLink = props => {
  return (
    <a
      className={classes.hightlightLink}
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className={classes.text}>{props.title}</span>
      <img
        src={require(`../../../../assets/svgs/${props.label}.svg`)}
        alt={props.title}
      />
    </a>
  );
};

export default FooterLink;
