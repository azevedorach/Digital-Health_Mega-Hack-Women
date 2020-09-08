import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const AlertMessage = (props) => {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.open}
        onClose={handleClose}
        autoHideDuration={props.duration ? props.duration : 5000}
        message={props.message}
        severity={props.severity}
        key={vertical + horizontal}
      >
        <Alert severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>

    </div>
  );
}

export default AlertMessage;