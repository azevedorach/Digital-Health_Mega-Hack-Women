import React from "react";
import mainLogo from '../assets//unimed.png';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Snackbar,
} from "@material-ui/core";
import Copyright from "../commons/Copyright";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import Theme from "../commons/Theme";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: 120,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    login: "",
    password: "",
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const verifySubmit = (event) => {
    if (event.key === "Enter") {
      submitLogin();
    }
  };

  const submitLogin = () => {
    history.push("/dashboard");
  };

  const loginChange = (event) => {
    setState({
      ...state,
      login: event.target.value,
    });
  };

  const passwordChange = (event) => {
    setState({
      ...state,
      password: event.target.value,
    });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Theme>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={mainLogo} className={classes.avatar} />

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              autoFocus
              fullWidth
              id="login"
              label="Login"
              name="login"
              value={state.login}
              autoComplete="login"
              onChange={loginChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={state.password}
              onKeyDown={verifySubmit}
              onChange={passwordChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="click"
              fullWidth
              variant="contained"
              color="primary"
              onClick={submitLogin}
              className={classes.submit}
            >
              Entrar
          </Button>
          </div>
        </div>

        <Box mt={8}>
          <Copyright />
        </Box>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error">
            Usuário ou senha inválidos
        </Alert>
        </Snackbar>
      </Container>
    </Theme>
  );
};
export default withStyles(useStyles)(HomePage);
