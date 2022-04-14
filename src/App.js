import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reports from './components/Reports.js';
import Login from './components/Login.js';
import Homepage from './components/Homepage.js'
import Service from './components/Service.js';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {
  state = {
    id: "",
    firstLastName: "",
    company: "",
    addres: "",
    phoneNumber: "",
    kindOfDevice: "",
    brandInfo: "",
    modelInfo: "",
    imeiNumber: "",
    problem: "",
    otherProblems: "",
    approvedRiskOne: true,
    approvedRiskTwo: true,
    dataSave: true,
  };


  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {

    const { id, firstLastName, company, addres, phoneNumber, kindOfDevice, brandInfo, modelInfo, imeiNumber, problem, otherProblems, approvedRiskOne, approvedRiskTwo, dataSave } = this.state;
    const values = { id, firstLastName, company, addres, phoneNumber, kindOfDevice, brandInfo, modelInfo, imeiNumber, problem, otherProblems, approvedRiskOne, approvedRiskTwo, dataSave };




    return (

      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/service" element={<Service handleChange={this.handleChange}
              values={values} />}
            />
            <Route path="/reports" element={<Reports
              values={values} />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter >

    );
  }
}

export default App;
