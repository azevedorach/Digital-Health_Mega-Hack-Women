import superagent from "superagent";

const platformHost = "http://localhost:8080";

const requestPost = (path, body) => {
  return superagent
    .post(`${platformHost}${path}`)
    .send(body)
    .set("Content-Type", "application/json")
    .set("Authorization", `${localStorage.getItem("jwt")}`)
    .then((res) => res)
    .catch((err) => err.status);
};

const requestPut = (path, body) => {
  return superagent
    .put(`${platformHost}${path}`)
    .send(body)
    .set("Content-Type", "application/json")
    .set("Authorization", `${localStorage.getItem("jwt")}`)
    .then((res) => res)
    .catch((err) => err.status);
};


const requestGet = (path) => {
  return superagent
    .get(`${platformHost}${path}`)
    .set("Content-Type", "application/json")
    .set("Authorization", `${localStorage.getItem("jwt")}`)
    .then((res) => res)
    .catch((err) => {
      if (err.status === 401) {
        localStorage.removeItem("jwt");
        window.location.href = "/";
      }
    });
};

const requestDelete = (path) => {
  return superagent
    .delete(`${platformHost}${path}`)
    .set("Content-Type", "application/json")
    .set("Authorization", `${localStorage.getItem("jwt")}`)
    .then((res) => res)
    .catch((err) => {
      if (err.status === 401) {
        localStorage.removeItem("jwt");
        window.location.href = "/";
      }
    });
};

const PlatformRequest = {
  loginRequest: (body) => requestPost(`/v1/auth/login`, body),
  
  getPacientes: () => requestGet(`/v1/pacientes`),
  postNewPaciente: (body) => requestPost(`/v1/pacientes`, body),
  deletePaciente: (id) => requestDelete(`/v1/pacientes/${id}`, id),
  updatePaciente: (id, body) => requestPut(`/v1/pacientes/${id}`, body),
};

export default PlatformRequest;
