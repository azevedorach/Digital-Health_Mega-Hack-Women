import React, { useEffect } from "react";
import PageCustom from "../../components/PageCustom";
import CustomTable from "../../components/CustomTable";
import PlatformRequest from "../../utils/PlatformRequest";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ActionEditDelete from "../../components/ActionEditDelete";
import FabButton from "../../components/FabButton";
import AddIcon from "@material-ui/icons/Add";
import ModalDialog from "../../components/ModalDialog";
import AlertMessage from "../../components/AlertMessage";

const PacientePage = (props) => {
  const [load, setLoad] = React.useState(true);
  const [state, setState] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [descriptionWarning, setDescriptionWarning] = React.useState(false);
  const [paciente, setPaciente] = React.useState({});
  const [title, setTitle] = React.useState({ title: "", subtitle: "" });
  const tableTitles = ["Descrição", "Ações"];

  const resetPage = () => {
    setDescriptionWarning(false);
    setLoad(false);
    setDescription("");
    setPaciente({});
    setOpen(false);
  }

  const loadPacientes = () => {
    setLoad(false);
    return [];
  };

  const validInput = () => {
    return (description !== "");
  }

  const actionPaciente = () => {
    if (!validInput()) {
      setDescriptionWarning(true);
      setLoad(false);
      return;
    }

    setLoad(true);
    setOpen(false);
    if (paciente !== undefined && paciente.id !== undefined) {
      return editPaciente(paciente);
    }

    return saveNewPaciente({ description: description })
  };

  useEffect(() => {
    loadPacientes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const saveNewPaciente = (paciente) => {
    
  }

  const editPaciente = (paciente) => {
    let table = state.filter(item => item !== paciente);
    table.push(paciente);
    setState(table);
    resetPage();
  }

  const deletePaciente = (paciente) => {
    setLoad(true);
    let table = state.filter(item => item !== paciente);
    setState(table);
    resetPage();
  }

  const openModal = () => {
    setTitle({
      title: "Inserir Novo Paciente",
    })
    setOpen(true);
  }

  const closeModal = () => {
    resetPage();
  }

  const openEditModal = (row) => {
    setTitle({ title: "Editar Paciente", subtitle: "Editar um(a) paciente já existente" })
    setDescription(row.description);
    setPaciente(row);
    setOpen(true);
  }

  const changeDescription = (event) => {
    setDescription(event.target.value)
  }

  const tableRows = state.map((row) => (
    <TableRow key={row.id} hover>
      <TableCell align="left">{row.description}</TableCell>
      <TableCell aling="left">
        <ActionEditDelete
          editAction={() => openEditModal(row)}
          deleteAction={() => deletePaciente(row)}
          messageDelete={`Deseja realmente excluir ${row.description}?`} />
      </TableCell>
    </TableRow>
  ));

  const tablePacientes = (
    <CustomTable
      title={tableTitles}
      items={tableRows}
    />
  )

  const modalPaciente = (
    <ModalDialog
      title={title.title}
      label="Paciente"
      open={open}
      close={closeModal}
      subTitle={title.subtitle}
      saveMethod={actionPaciente}
      button={<FabButton clickFab={() => openModal()} iconButton={<AddIcon />} />}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Paciente"
            variant="outlined"
            size="medium"
            margin="normal"
            required
            autoFocus
            error={descriptionWarning}
            fullWidth
            value={description}
            onChange={changeDescription}
          />
        </Grid>
      </Grid>
    </ModalDialog>
  )

  return (
    <div>
      <AlertMessage />
      <PageCustom title="Pacientes" load={load}>
        {tablePacientes}
        {modalPaciente}
      </PageCustom>
    </div>
  );
}

export default PacientePage;