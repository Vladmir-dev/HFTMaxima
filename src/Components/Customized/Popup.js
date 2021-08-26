import React from "react";
import { Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import { Customized } from "./Customized";
export default function Popup({ openPopup, setOpenPopup, children, title }) {
  const classes = useStyles();
  return (
    <Dialog open={openPopup} className={classes.dialog}>
      <DialogTitle>
        <div className={classes.flex}>
          <Typography variant="body1">{title}</Typography>
          <Customized.Button
            className={classes.button}
            variant='text'
            startIcon={<CloseIcon fontSize="small" />}
            onClick={() => setOpenPopup(false)}
          />
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
