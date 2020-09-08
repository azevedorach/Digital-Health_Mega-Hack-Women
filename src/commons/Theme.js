import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: "#449a5e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2d693c",
    },
    background: {
      paper: "#fff",
      default: "#ebebeb",
    },
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 16,
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#2d693c"
    }
  }
});

const Theme = (props) => {
  return (
    <MuiThemeProvider theme={themeDefault ? themeDefault : themeDark}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

export default Theme;
