import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/index"} element={"logged"}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
