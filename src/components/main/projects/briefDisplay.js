import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./briefDisplay.css";

const useStyles = makeStyles({
  card: {
    // maxWidth: 34500
    width: 300,
    minWidth: 300
  }
});

export default function BriefDisplay() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id="brief-display-wrapper">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images2.alphacoders.com/518/518321.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
