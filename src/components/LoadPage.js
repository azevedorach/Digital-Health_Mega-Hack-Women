import React from 'react';
import {
    makeStyles,
    Backdrop,
    CircularProgress
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

const LoadPage = (props) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={props.load}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )

}

export default LoadPage;