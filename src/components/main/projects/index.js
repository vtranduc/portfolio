import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BriefDisplay from "./briefDisplay";
import projectData from "../../../db/projectData";
import Grid from "@material-ui/core/Grid";
import useWindowWidth from "../../../helpers/useWindowWidth";
import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  gridDiv: {
    flexGrow: 1,
    margin: "0.5em"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  briefShowcase: {
    maxWidth: "auto"
  }
}));

export default function Projects() {
  const classes = useStyles();
  const width = useWindowWidth();
  const projectList = projectData.map(e => {
    return (
      <Grid key={e.id} item xs={width > 800 ? 6 : 12}>
        <BriefDisplay
          className={classes.paper}
          title={e.title}
          summary={e.summary}
          thumbnail={e.thumbnail}
          repository={e.repository}
          actions={e.actions}
        ></BriefDisplay>
      </Grid>
    );
  });

  return (
    <Paper className={classes.root} id="project-paper">
      <Typography variant="h5" component="h3">
        Projects
      </Typography>
      <Typography component="p">
        Here are some of my projects I have done in the past. All the projects'
        repositories are available on my github!
      </Typography>
      <div className={classes.gridDiv}>
        <Grid container spacing={3}>
          {projectList}
        </Grid>
      </div>
    </Paper>
  );
}
