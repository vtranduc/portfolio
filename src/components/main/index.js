import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Profile from "./profile/index";
import Projects from "./projects/index";
import TechStacks from "./techStacks/index";
import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const paperWidth = 800;
const contentWidth = 750;

export default function Main() {
  const classes = useStyles();

  return (
    <div id="parent">
      <Paper
        className={classes.root}
        style={{ border: "none", width: paperWidth }}
      >
        {/* <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography> */}
        <div id="content-centerer">
          <div id="content-wrapper-main" style={{ width: contentWidth }}>
            <div className="content-main">
              <Profile></Profile>
            </div>
            <div className="content-main">
              <Projects></Projects>
            </div>
            <div className="content-main">
              <TechStacks></TechStacks>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
