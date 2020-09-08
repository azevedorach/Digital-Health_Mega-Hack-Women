import React from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from "@material-ui/core";

const ModalDialog = (props) => {
  
  const callButtonSave = () => {
    props.saveMethod();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.subTitle}</DialogContentText>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancelar
            </Button>
          <Button onClick={callButtonSave} color="primary" variant="contained">
            Salvar
            </Button>
          {props.action}
        </DialogActions>
      </Dialog>

      {props.button}
    </div>
  );
}

export default ModalDialog;
