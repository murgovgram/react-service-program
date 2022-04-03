import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reports from './components/Reports.js';
import Login from './components/Login.js';
import Homepage from './components/Homepage.js'
import Service from './components/Service.js';


function App() {




  return (

    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter >

  );
}

export default App;
