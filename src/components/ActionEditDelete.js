import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Grid } from "@material-ui/core";
import ConfirmDialog from "./ConfirmDialog";
import ModalDialog from "./ModalDialog";

const ActionEditDelete = (props) => {

  const editAction = () => {
    props.editAction();
  }

  const deleteAction = () => {
    props.deleteAction();
  }

  const modalType = (
    <ModalDialog color="primary"
      title={props.titleEdit}
      subTitle={props.subtitleEdit}
      saveMethod={editAction}
      iconButton={<EditIcon />}
    >
      {props.modalEdit}
    </ModalDialog>
  )

  const buttonType = (
    // <EditIcon color="primary" onClick={editAction} />
    <Button
      color="primary"
      onClick={editAction}><EditIcon /></Button>
  )

  return (
    <Grid container spacing={1}>
      <Grid item>  {props.modal ? modalType : buttonType}</Grid>
      <Grid item>
        <ConfirmDialog
          title="Excluir"
          description={props.messageDelete}
          iconButton={<DeleteIcon />}
          color="secondary"
          variant="contained"
          yesButtonAction={() => deleteAction()} />
      </Grid>
    </Grid>
  );
};

export default ActionEditDelete;
