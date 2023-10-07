import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
import EditLocationForm from "./EditLocationForm";
import { deleteLocation } from "./Api";

export const Description = ({ open, attractionData, descriptionClose }) => {
  const [edit, setEdit] = useState(false);
  const [selectedAttraction, setselectedAttraction] = useState(attractionData);
  const handleClose = () => {
    setEdit(false);
  };

  const handleDelete = async () => {
    const response = await deleteLocation(selectedAttraction.id);
    console.log("hello");
    setEdit(false);
    if (response.success) {
    } else {
    }
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={descriptionClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={descriptionClose}
              aria-label="close"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Description
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="d-flex justify-content-center">
          <Card className="p-3" sx={{ maxWidth: 545 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={selectedAttraction.coverimage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedAttraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedAttraction.detail}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedAttraction.latitude}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedAttraction.longitude}
                </Typography>
              </CardContent>
              <div className="d-flex justify-content-between">
                <Button variant="contained" onClick={() => setEdit(true)}>
                  Edit
                </Button>
                <Button
                  onClick={handleDelete}
                  color="error"
                  variant="contained"
                >
                  Delete
                </Button>
              </div>

              {edit === true && (
                <>
                  <EditLocationForm
                    open={open}
                    handleClose={handleClose}
                    locationData={selectedAttraction.location}
                  />
                </>
              )}
            </CardActionArea>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};
