import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Login from "./component/Login";
import ResetPassword from "./component/ResetPassword";
import Dasboard from "./component/Dashboard/Dasboard";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element ={<ResetPassword/>}/>
        <Route path="/dasboard" element={<Dasboard/>} />
      </Routes>
    </Router>
  );
};

export default App;