const express = require("express");

const app = express();

app.get("/api/projects", (req, res) => {
  const projects = [
    {
      title: "Personal Website",
      type: "github",
      link: "github.com/afeedh",
      desc: "My personal website project v3.0.",
      time: "July 2019 - Present",
      used: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Resume System",
      type: "github",
      link: "https://github.com/afeedh/resume-management-system",
      desc: "A node project I did with my friend for a small startup",
      time: "Dec 2019",
      used: ["Express", "Node", "MongoDB", "EJS", "Docker"]
    },
    {
      title: "Interface '19",
      link: "https://interface.tathva.org",
      type: "github",
      desc:
        "Interface '19 is the Malabar's largets student startup summit. I built the website for it",
      time: "JUne 2019 - July 2019",
      used: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "getIndianVisa",
      type: "gitlab",
      link: "https://visa-web-portal.herokuapp.com",
      desc: "Developed a website for the startup getIndianVisa",
      time: "July 2019 - Present",
      used: ["Python", "HMTL", "CSS", "JavaScript"]
    },
    {
      title: "Marine Zone Prediction",
      type: "gitlab",
      link: "https://gitlab.com/afeedh/pfz-prediction",
      desc:
        "A machine learning internship project at college under Dr. Sudhish N. George",
      time: "June 2019 - Present",
      used: ["Scikit", "Keras", "Tensorflow"]
    },
    {
      title: "Verzeo",
      type: "github",
      link: "https://github.com/afeedh/verzeo-ml",
      desc:
        "Machine learning internship projects at a elearning startup called Verzeo",
      time: "May 2019 - June 2019",
      used: ["NLP", "Scikit"]
    },
    {
      title: "Ragam '19",
      type: "gitlab",
      link: "https://github.com/afeedh/ragam19",
      desc:
        "Ragam '19 is the annual cultural fest of NIT Calicut. I was fortunate enought to be a part of the Ragam '19 website team. Built the contact us page for it.",
      time: "March 2019",
      used: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Mess Management System",
      type: "gitlab",
      link: "https://gitlab.com/dbms-project/mess-management",
      desc:
        "A database management system project based I did with 2 of my other developers for DBMS course, V Semester, NIT Calicut",
      time: "Sep 2019 - Nov 2019",
      used: ["PHP", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Kernel Project",
      type: "github",
      link:
        "https://github.com/abinpaul1/Linux-Kernel-Module-for-Android-Based-Gesture-Control",
      desc:
        "Kernel control based on gestures recieved through android app done as part of OS course, V Semester, NIT Calicut",
      time: "Sep 2019 - Nov 2019",
      used: ["C/C++", "java", "Android Studio"]
    },
    {
      title: "Million Songs Analysis",
      type: "github",
      link: "#",
      desc:
        "Analaysis of the given million dataset of songs and make predictions by fitting in different models",
      time: "Sep 2019 - Nov 2019",
      used: ["R", "Linear Mixed Model", "RStudio"]
    }
  ];

  res.json(projects);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
