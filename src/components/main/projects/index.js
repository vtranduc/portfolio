import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BriefDisplay from "./briefDisplay";
import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  briefShowcase: {
    // maxWidth: 300
    maxWidth: "auto"
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Completed projects
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Paper className={classes.briefShowcase} id="brief-display-container">
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
        </Paper>
        {/* <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p> */}
      </Paper>
    </div>
  );
}
