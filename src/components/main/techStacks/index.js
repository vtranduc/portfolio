import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useScript from "../../../helpers/useScript";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function TechStacks() {
  const classes = useStyles();
  useScript("https://cdn1.stackshare.io/javascripts/client-code.js");

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          TechStacks
        </Typography>
        <Typography component="p">
          In the past projects, I have used and learned many technologies for
          web and app developments. I embrace the new modern technologies while
          still work effectively with the web applications that have been around
          for long time. Here are some of the tech stacks I am fluent at!
        </Typography>

        <a
          frameBorder="0"
          data-theme="light"
          data-layers="1,2,3,4"
          data-stack-embed="true"
          href="https://embed.stackshare.io/stacks/embed/3fcb281de5b8c8cc9bfc2c22b35282"
        />
      </Paper>
    </div>
  );
}
