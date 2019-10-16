import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../index.css";

export default function Contact({ variant, color, classBtn, img, txt }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button
        variant={variant}
        color={color}
        onClick={handleClickOpen}
        className={classBtn}
      >
        {img && <img className="main-nav-btn" src={img} alt={img}></img>}
        {txt && txt}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">You can reach me at:</DialogTitle>
        {/* <DialogContent>Phone: 780 709 7927</DialogContent>
        <DialogActions>Email: vtranduc@ryerson.ca</DialogActions> */}
        <DialogContent>Phone: 780 709 7927</DialogContent>
        <DialogContent>Email: vtranduc@ryerson.ca</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
