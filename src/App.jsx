import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Doctor/Login"
import Signup from "./Doctor/Signup"
import Home from "./Doctor/Home";

import PatientLogin from "./Patient/PatientLogin"
import PatientSignup from "./Patient/PatientSignup"


function App() {
  const [hide, setHide] = useState("none");
  const [hide1, setHide1] = useState("none");
  const [hide2, setHide2] = useState("block");

  function handleHide() {
    setHide("block");
    setHide2("none");
  }
  function handleHide1() {
    setHide1("block");
    setHide2("none");
  }
  function handleHide2() {
    setHide("none");
  }
  function handleHide3() {
    setHide1("none");
  }


  return (
    <div className="App">
      <Router>
        <div className="interface">
          <input type="button" value="I am Doctor" onClick={handleHide} style={{ display: hide2 }} />   <br />
          <input type="button" value="I am Patient" onClick={handleHide1} style={{ display: hide2 }} />   <br />
        </div>

        <div className="doctor" style={{ display: hide }}>
          <Link to="/Login" onClick={handleHide2}>Already Have a Account</Link> <br />
          <Link to="/Signup" onClick={handleHide2}>Register</Link>
        </div>

        <div className="patient" style={{ display: hide1 }}>  
          <Link to="/PatientLogin" onClick={handleHide3}>Login</Link>
          <Link to="/PatientSignup" onClick={handleHide3}>Sign Up</Link>
        </div>


        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Home/>}></Route>

          <Route path="/PatientLogin" element={<PatientLogin />}></Route>
          <Route path="/PatientSignup" element={<PatientSignup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
