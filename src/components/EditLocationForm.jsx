import React, { useState, useEffect } from "react";
import {  deleteLocation, getLocations, updateLocation } from "./Api";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const EditLocationForm = ({ locationId, open, handleClose, locationData }) => {
  const [location, setLocation] = useState(locationData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClose();
    const response = await updateLocation(location);

    if (response.success) {
    } else {
    }
  };

  

  

//   useEffect(() => {
//     getLocationDetail(locationId).then((locationData) => {
//       setLocation(locationData);
//     });
//   }, [locationId]);

   React.useEffect(() => {
    console.log("Hello");
    getLocations()
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit Location</DialogTitle>
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
            Update Location
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditLocationForm;
