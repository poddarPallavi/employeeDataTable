import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { EmployeeDataPage } from "./pages/EmployeeDataPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
