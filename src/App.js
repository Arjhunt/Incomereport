import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from './Dashboard'
import Card from './Card'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Tables from './Tables'
import Incomereport from './Incomereport'



function App() {
  return (
    <div id="wrapper">
    <BrowserRouter>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Expenditure" element={<Tables/>} />
              <Route path="/Incomereport" element={<Incomereport/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>

  )

}

export default App


