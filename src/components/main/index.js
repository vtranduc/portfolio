import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Profile from "./profile/index";
import Projects from "./projects/index";
import TechStacks from "./techStacks/index";
import Button from "@material-ui/core/Button";
import Contact from "./contact/index";
import "./index.css";

const useStyles = makeStyles(theme => ({
  // root: {
  //   padding: theme.spacing(3, 2)
  // },
  button: {
    // margin: theme.spacing(1)
    // border: "solid red;"
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div id="parent">
      <div id="main-paper">
        <div id="main-nav-btn-div">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => {
              document.getElementById("profile-wrapper").scrollIntoView();
            }}
          >
            <img
              className="main-nav-btn"
              src="main/icon.png"
              alt="go-to-profile-btn"
            ></img>
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => {
              document.getElementById("techStacks-wrapper").scrollIntoView();
            }}
          >
            <img
              className="main-nav-btn"
              alt="go-to-skills-btn"
              src="main/icon2.png"
            ></img>
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => {
              document.getElementById("projects-wrapper").scrollIntoView();
            }}
          >
            <img
              className="main-nav-btn"
              alt="go-to-project-btn"
              src="main/icon3.png"
            ></img>
          </Button>
          <Contact
            variant="contained"
            color="default"
            classBtn={classes.button}
            img={"main/icon4.png"}
          ></Contact>
        </div>
        <div id="content-centerer">
          <div id="content-wrapper-main">
            <div className="content-main" id="profile-wrapper">
              <Profile></Profile>
            </div>
            <div className="content-main" id="projects-wrapper">
              <Projects></Projects>
            </div>
            <div className="content-main" id="techStacks-wrapper">
              <TechStacks></TechStacks>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
