import React from 'react';
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fab: {
        right: 20,
        bottom: 20,
        position: "absolute",
        cursor: "pointer",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        border: "none",
        boxShadow: "0 1px 5px rgba(0,0,0,.4)",
        WebkitTransition: ".2s ease-out",
        MozTransition: ".2s ease-out",
        transition: ".2s ease-out"
    }
}));

const FabButton = (props) => {
    const classes = useStyles();
    const clickButton = () => {
        props.clickFab();
    }

    return (
        <Button
            onClick={clickButton}
            color={props.color ? props.color : 'primary'}
            aria-label="add"
            variant={props.contained ? props.contained : 'contained'}
            className={classes.fab}
        >
            {props.iconButton}
        </Button>
    );
}

export default FabButton;
