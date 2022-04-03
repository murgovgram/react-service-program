import React, { Component } from 'react'
import Header from './Header';

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="py-64 font-bold text-center text-white">
          <h1>Добродојдовте</h1>
        </div>
      </React.Fragment>

    );
  }
}

export default Homepage;