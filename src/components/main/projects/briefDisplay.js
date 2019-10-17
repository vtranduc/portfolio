import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import addLineBreaks from "../../../helpers/addLineBreaks";
import "./briefDisplay.css";

const useStyles = makeStyles({
  card: {
    // maxWidth: 34500
    width: 300,
    minWidth: 300
  }
});

export default function BriefDisplay({
  thumbnail,
  title,
  summary,
  repository,
  actions
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} id="brief-display-wrapper">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {addLineBreaks(summary)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {repository && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              window.open(repository);
            }}
          >
            Repository
          </Button>
        )}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        {actions.map((e, i) => {
          return (
            <Button
              size="small"
              color="primary"
              key={i}
              onClick={() => {
                if (e.type === "openNewPage") {
                  window.open(e.url);
                }
              }}
            >
              {e.name}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
}
