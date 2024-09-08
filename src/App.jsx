import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { AddEmployee } from './pages/AddEmployee';
import { EditEmployee } from './pages/EditEmployee';
import { EmployeeDetail } from './pages/EmployeeDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_form" element={<AddEmployee />} />
        <Route path="/edit_page" element={<EditEmployee />} />
        <Route path="/details" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
