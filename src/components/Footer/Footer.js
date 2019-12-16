import React from "react";
import classes from "./Footer.module.css";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <FooterCopyright />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
