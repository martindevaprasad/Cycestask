import React, { useState } from "react";

import { login } from "./Api";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const expiresIn = 180000;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login(username, password, expiresIn);
    const token = response?.accessToken;
    if (token) {
      localStorage.setItem("token", token);
   
      navigate("/location");
    } else {
    }
  };


 

  return (
    <div
      
      className="p-5 d-flex justify-content-center align-self-center "
    >
      <form
        style={{
          background: "#1976d2",
          maxWidth: "568px",
          height: "50vh",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
        className="p-4 "
        onSubmit={handleSubmit}
      >
        <Typography className="my-3 text-white" variant="h3">
          LOGIN
        </Typography>
        <TextField
          fullWidth
          className="bg-white rounded"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className="my-4 bg-white rounded"
          fullWidth
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          style={{ background: "#fff" }}
          variant="contained"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
