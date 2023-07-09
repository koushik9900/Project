// import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register.js";
import SignIn from "./components/SignIn.js";
import Navbar from "./components/Navbar/Navbar.js";
// import { Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Register/> */}
       {/* <switch>
        <Route path="/Register" Component={Register} exact>
          <Register />
        </Route>
        <Route path="/SignIn" Component={SignIn} exact>
          <SignIn />
        </Route>
      </switch>  */}
      {/* <Register/> */}
    </Router>
  );
};

export default App;
