import React, { useState } from "react";
import { createLocation, getLocations } from "./Api";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const CreateLocationForm = ({ open, handleClose ,onCreate}) => {
  const [location, setLocation] = useState({
    name: "",
    detail: "",
    coverimage: "",
    latitude: 0,
    longitude: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClose();
    const token = localStorage.getItem("token");
    const response = await createLocation(location,token);
  

    if (response.success) {
    } else {
    }
  };

  React.useEffect(() => {
    console.log("HI");
    getLocations()
  }, [handleSubmit]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Create Location</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            className="mt-1"
            fullWidth
            type="text"
            name="name"
            placeholder="Name"
            value={location.name}
            onChange={handleChange}
          />
          <TextField
            className="mt-1"
            fullWidth
            type="text"
            name="detail"
            placeholder="Detail"
            value={location.detail}
            onChange={handleChange}
          />
          <TextField
            className="mt-1"
            fullWidth
            type="text"
            name="coverimage"
            placeholder="Cover image URL"
            value={location.coverimage}
            onChange={handleChange}
          />
          <TextField
            className="mt-1"
            fullWidth
            type="number"
            name="latitude"
            placeholder="Latitude"
            value={location.latitude}
            onChange={handleChange}
          />
          <TextField
            className="mt-1"
            fullWidth
            type="number"
            name="longitude"
            placeholder="Longitude"
            value={location.longitude}
            onChange={handleChange}
          />
          <Button className="mt-2" variant="contained" type="submit">
            Create Location
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLocationForm;
