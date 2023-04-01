import "./App.css";
import { UserCard } from "./user-card/UserCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    clearInputs();
  };
  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [users, setUsers] = useState([]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const saveUser = (e) => {
    e.preventDefault();
    const user = {
      name: currentUserName,
      email: currentEmail,
      imgSrc: currentImgSrc,
    };
    setUsers([...users, user]);
    handleClose();
  };

  const editUser = (user) => {
    setCurrentImgSrc(user.imgSrc);
    setCurrentUserName(user.name);
    setCurrentEmail(user.email);
    handleOpen();
  };

  const updateUser = (e) => {
    e.preventDefault();
    let index = users.findIndex((user) => user.email === currentEmail);
    users[index] = {
      name: currentUserName,
      email: currentEmail,
      imgSrc: currentImgSrc,
    };
    setUsers(users);
    handleClose();
  };

  const deleteUser = () => {
    setUsers(users.filter((user) => user.email !== currentEmail));
    handleClose();
  };

  const clearInputs = () => {
    setCurrentImgSrc("");
    setCurrentUserName("");
    setCurrentEmail("");
  };

  const editMode = () => {
    return users.find((user) => currentEmail === user.email);
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        {users?.map(({ name, email, imgSrc }) => (
          <Grid item xs={6} sm={4} md={3}>
            <UserCard
              key={email}
              name={name}
              email={email}
              imgSrc={imgSrc}
              editUser={editUser}
            />
          </Grid>
        ))}
      </Grid>
      <div className="fab" onClick={handleOpen}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={!editMode() ? saveUser : updateUser}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add user
            </Typography>
            <TextField
              label="Image url"
              type="text"
              variant="standard"
              value={currentImgSrc}
              onChange={(e) => setCurrentImgSrc(e.target.value)}
              fullWidth
              required
              sx={{ mt: 1 }}
            />
            <TextField
              label="Username"
              type="text"
              variant="standard"
              value={currentUserName}
              fullWidth
              required
              sx={{ mt: 1 }}
              onChange={(e) => {
                setCurrentUserName(e.target.value);
              }}
            />
            <TextField
              label="Email"
              type="email"
              variant="standard"
              value={currentEmail}
              fullWidth
              required
              sx={{ mt: 1 }}
              onChange={(e) => setCurrentEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              {!editMode() ? "Add User" : "Update User"}
            </Button>
            <Button
              onClick={deleteUser}
              type="button"
              variant="outlined"
              sx={{ mt: 2, ml: 2 }}
            >
              Delete user
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
