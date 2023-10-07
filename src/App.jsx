
import React from "react";
import "./App.css";
import Location from "./components/Location";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
  const isLoggedin = localStorage.getItem("token");

React.useEffect(() => {
  if(isLoggedin)(
    <Navigate to="/location"  />
  )
}, [])


  return (
    <>
      <Routes>
      <Route index path="/" element={<Login />} />
    
      <Route index path="/login" element={<Login />} />
      <Route
            path="/location/*"
            element={
              isLoggedin ? (
                <Location />
              ) : (
                <Navigate to="/login"  />
              )
            }
          />
      </Routes>
    </>
  );
}

export default App;
