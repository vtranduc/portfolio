import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BriefDisplay from "./briefDisplay";
import projectData from "../../../db/projectData";
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
  const projectList = projectData.map(e => {
    return (
      <BriefDisplay
        key={e.id}
        title={e.title}
        summary={e.summary}
        thumbnail={e.thumbnail}
        repository={e.repository}
        actions={e.actions}
      ></BriefDisplay>
    );
  });

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Projects
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        {/* <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography> */}
        <Paper className={classes.briefShowcase} id="brief-display-container">
          {projectList}
          {/* <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay>
          <BriefDisplay></BriefDisplay> */}
        </Paper>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EFTXFHAlir0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
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
