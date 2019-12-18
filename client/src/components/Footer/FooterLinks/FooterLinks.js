import React from "react";
import classes from "./FooterLinks.module.css";
import FooterLink from "./FooterLink/FooterLink";

const links = [
  { label: "phone", title: "Phone", link: "tel:8921584835" },
  {
    label: "facebook",
    title: "Facebook",
    link: "http://facebook.com/Afeedh"
  },
  {
    label: "email",
    title: "Email",
    link: "mailto:afeedh_b170282cs@nitc.ac.in"
  },
  {
    label: "twitter",
    title: "Twitter",
    link: "https://twitter.com/__afeedh__"
  },
  { label: "github", title: "Github", link: "https://github.com/afeedh" },
  {
    label: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/afeedh-shaji-29574b167/"
  }
];

const footerLinks = () => {
  return (
    <div className={classes.footer__links}>
      {links.map(linkKey => (
        <FooterLink
          title={linkKey.title}
          link={linkKey.link}
          label={linkKey.label}
          key={linkKey.label}
        />
      ))}
    </div>
  );
};

export default footerLinks;
