import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Profile from "./profile/index";
import Projects from "./projects/index";
import TechStacks from "./techStacks/index";
import Button from "@material-ui/core/Button";
import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div id="parent">
      <Paper className={classes.root} id="main-paper">
        <div id="main-nav-btn-div">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <img
              className="main-nav-btn"
              src="https://raw.githubusercontent.com/vtranduc/portfolio/master/public/main/icon4.png"
            ></img>
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <img
              className="main-nav-btn"
              src="https://raw.githubusercontent.com/vtranduc/portfolio/master/public/main/icon4.png"
            ></img>
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <img
              className="main-nav-btn"
              src="https://raw.githubusercontent.com/vtranduc/portfolio/master/public/main/icon4.png"
            ></img>
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <img
              className="main-nav-btn"
              src="https://raw.githubusercontent.com/vtranduc/portfolio/master/public/main/icon4.png"
            ></img>
          </Button>
        </div>
        <div id="content-centerer">
          <div id="content-wrapper-main">
            <div className="content-main">
              <Profile></Profile>
            </div>
            <div className="content-main">
              <TechStacks></TechStacks>
            </div>
            <div className="content-main">
              <Projects></Projects>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
