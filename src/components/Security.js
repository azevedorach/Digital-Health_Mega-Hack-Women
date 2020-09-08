import React from "react";
import { useHistory } from "react-router-dom";

const Security = () => {
  const history = useHistory();
  const jwt = localStorage.getItem("jwt");

  if (jwt === undefined || jwt === "" || jwt === null) {
    history.push("/");
  }

  return <div></div>;
};

export default Security;
