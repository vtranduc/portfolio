import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Contact from "../contact/index";
import clsx from "clsx";
import "./index.css";

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345
    width: "100%"
  },
  media: {
    height: 140
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <CardMedia
          className={classes.media}
          image="main/Toronto.jpg"
          title="profile-image"
        >
          <div id="cardMediaContainer">
            <div id="toronto-intro-1">
              <h1 className="greeting">Hello, I am Viet-Nhien Tran Duc</h1>
            </div>
            <div id="toronto-intro-2">
              <h1 className="greeting">I am a full stack web developer!</h1>
            </div>
          </div>
          {/* <h1 className="greeting">Hello, I am Viet-Nhien</h1>
          <div id="intro2">
            <h1 className="greeting">I am a full-stack web developer!</h1>
          </div> */}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            I am an aspiring full-stack web developer!
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Typography variant="body2" color="textPrimary" component="p">
            I am an aspiring full-stack web developer and also a mobile app
            developer based in Toronto, ON! I have built several web
            applications using variety of tech stacks. I am also equipped with
            strong mathematical and engineering background, which allows to
            excel in advanced web applications, such as building custom game
            engine and mathematical modeling etc. My passion in computing
            science has earned me Master's degree in Chemical Engineering, and
            my years of experience in coding and learning technologies allow me
            to work effectively both independent and team setting!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div id="profile-action">
          <div id="contact-icons-wrapper">
            <div
              className="contact-icon-wrapper"
              onClick={() => {
                window.open("https://github.com/vtranduc/");
              }}
            >
              <img
                src="main/github.png"
                alt="githubIcon"
                className="contact-icon"
              ></img>
            </div>
            <div
              className="contact-icon-wrapper"
              onClick={() => {
                window.open("https://www.linkedin.com/in/vtranduc/");
              }}
            >
              <img
                src="main/linkedin.png"
                alt="linkedinIcon"
                className="contact-icon"
              ></img>
            </div>
            <div className="contact-icon-wrapper">
              <Contact size="small" color="primary" txt="Reach out"></Contact>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------- */}
          <div id="expand-btn">
            <div id="resume-txt">
              <Typography variant="body2" color="textSecondary" component="p">
                Resume
              </Typography>
            </div>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <embed src="./resume.pdf"></embed> */}
          <div
            id="resume-wrapper"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1D0jFjevJj3xypU5dCyTxISBCwc7htqVX/view?usp=sharing"
              );
            }}
          >
            <img id="resume-jpg" src="main/resume.jpg" alt="resume"></img>
          </div>
          {/* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
