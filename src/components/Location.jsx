import React, { useState, useEffect } from "react";
import { getLocationDetail, getLocations } from "./Api";
import CreateLocationForm from "./CreateLocationForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EditLocationForm from "./EditLocationForm";
import { Description } from "./Description";

const Location = () => {
  const [attractions, setAttractions] = useState([]);
  const [location, setLocation] = useState({
    name: "",
    detail: "",
    coverimage: "",
    latitude: 0,
    longitude: 0
  });

  const [id, setId] = useState();
  const [create, setCreate] = useState(false);

const [description, setDescription] = useState(false)
  const [edit, setEdit] = useState(false);
const [selectedAttraction, setSelectedAttraction] = useState()
 

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

  

  const handlecreateClose = () => {
    setCreate(false);
  };
  const CloseDesctiption = () => {
    setDescription(false);
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchAttractions = async () => {
      const response = await axios.get(
        "https://www.melivecode.com/api/attractions"
      );
      setAttractions(response.data);
      if(response.data){
        
        for(let attraction of response.data){
          getLocationDetail(attraction.id).then((locationData) => {
           
            attraction.location = locationData.attraction;
          });
        }
      }
    };

    fetchAttractions();
  }, []);

  // useEffect(() => {
  //   getLocationDetail(id).then((locationData) => {
  //     setLocation(locationData);
  //   });
  // }, [id]);

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Travel
            </Typography>
            <div className="d-flex ">
              <button
                className="mx-5"
                onClick={() => {
                  setCreate(true);
                }}
              >
                create
              </button>
              <Button
                variant="contained"
                color="info"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                LOGOUT
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <h1 className="p-3">List of locations</h1>
      <div style={{ padding: "0px", margin: "0px" }} className="row">
        {attractions.map((location) => (
          <Card 
            className="my-2 mx-2 col-md-3"
            key={location.id}
            sx={{ maxWidth: 345 }}
          >
            <CardMedia onClick={()=>{
              setDescription(true);
              setSelectedAttraction(location)


            }}
              sx={{ height: 140 }}
              image={location.coverimage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location.latitude}
              </Typography>
            </CardContent>
            <CardActions>
             
             
            </CardActions>
          </Card>
        ))}
      </div>

      {description === true && (
        <Description open={open} descriptionClose={CloseDesctiption} attractionData={selectedAttraction}/>
      )}
      {create === true && (
        <CreateLocationForm
          open={open}
          handleClose={handlecreateClose}
          locationId={id}
        />
      )}
    </div>
  );
};

export default Location;
