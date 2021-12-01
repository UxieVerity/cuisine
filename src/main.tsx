import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cuisine from "./view/Cuisine/Index";
import 'antd/dist/antd.css'
import { BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Cuisine />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
