import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { AddEmployee } from './pages/AddEmployee';
import { EditEmployee } from './pages/EditEmployee';
import { EmployeeDetail } from './pages/EmployeeDetail';

const basename = "/PROJECT_NO2_EMPLOYEE_MANAGER";

function App() {
  return (
    <Router basename={basename}>
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
