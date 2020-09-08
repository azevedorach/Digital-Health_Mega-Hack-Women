import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteButton = (props) => {

    const clickDelete = () => {
        props.clickDelete();
    }

    return (
        <Button
            onClick={clickDelete}
            color="secondary"
            size="small"
            variant="contained"><DeleteIcon /></Button>
    )

}

export default DeleteButton;