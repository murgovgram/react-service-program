import React, { Component } from 'react';
import Header from './Header';

class Reports extends React.Component {

  render() {

    const { values: { firstLastName } } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div>
          <h1>{firstLastName}</h1>
        </div>
      </React.Fragment>

    );
  }
}

export default Reports;