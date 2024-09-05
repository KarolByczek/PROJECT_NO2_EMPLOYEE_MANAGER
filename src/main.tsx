import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage.jsx';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { EmployeeDetail } from './pages/EmployeeDetail.jsx';
import { AddEmployee } from './pages/AddEmployee.jsx';
import { EditEmployee } from './pages/EditEmployee.jsx';
import "./i18n.js";

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/details',
      element: <EmployeeDetail />
    },
    {
      path: '/add_form',
      element: <AddEmployee />
    },
    {
      path: '/edit_page',
      element: <EditEmployee />
    }
  ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
     <RouterProvider router={router} /> 
    </div>
  </React.StrictMode>
)
