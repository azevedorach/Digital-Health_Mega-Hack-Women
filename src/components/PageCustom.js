import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Copyright from "../commons/Copyright";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";
import Security from "./Security";
import LoadPage from "./LoadPage";
import AlertMessage from "./AlertMessage";
import Theme from "../commons/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#efefef"
  },
  pageInner: {
    padding: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const PageCustom = (props) => {
  const classes = useStyles();
  const [load, setLoad] = React.useState(true);

  const showLoad = () => {
    if (props.load) {
      setLoad(props.load);
    } else {
      setLoad(false);
    }
  }

  useEffect(() => {
    showLoad();
  });
  return (
    <Theme>
      <div className={classes.root}>

        {/* Call message alert in page */}
        {props.alert ? <AlertMessage open={props.alert.open} message={props.alert.message} severity={props.alert.severity} /> : null}

        {/* load page */}
        <LoadPage load={load} />

        {/* Secutiry Page */}
        <Security />

        {/* Theme Css */}
        <CssBaseline />

        {/* TopBar */}
        <TopBar title={props.title} />

        <SideMenu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.pageInner}>{props.children}</div>
          <Container maxWidth="lg" className={classes.container}>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </Theme>
  );
};

export default PageCustom;
