import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
    color: "#000",
  },
}));

const ITemMenuList = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const links = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Pacientes",
      route: "/pacientes",
      icon: <CategoryOutlinedIcon />,
    },
  ];

  const { location: { pathname } } = history;
  let menuList = links.map((item, index) => (
    <Link to={item.route} className={classes.linkStyle} key={index}>
      <ListItem button selected={pathname === item.route}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  ));

  return (
    <List>
      {menuList}
    </List>
  );
};

export default ITemMenuList;
