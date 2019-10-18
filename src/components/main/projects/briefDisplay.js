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

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 34500
    // width: 300
    // minWidth: 600
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

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
      <CardActionArea
      // style={{ display: "flex", flexDirection: "row", width: "50em" }}
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
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
        <div
          className={`${classes.root} brief-display-action-wrap`}
          // style={{ border: "solid green" }}
        >
          {repository && (
            // <div style={{ border: "solid" }}>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                window.open(repository);
              }}
            >
              Repository
            </Button>
            // </div>
          )}
          {actions.map((e, i) => {
            return (
              <div key={i}>
                {e.type === "openNewPage" && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      window.open(e.url);
                    }}
                  >
                    {e.name}
                  </Button>
                )}
                {e.type === "openNewPageWithImg" && (
                  <div
                    className="brief-display-img-btn-div"
                    onClick={() => {
                      window.open(e.url);
                    }}
                  >
                    <img
                      className="brief-display-img-btn"
                      src={e.img}
                      alt={e.img}
                    ></img>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardActions>
    </Card>
  );
}
