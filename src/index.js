
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import component
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


