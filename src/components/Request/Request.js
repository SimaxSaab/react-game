import React, { Component } from 'react';

import t from './Request.module.css';

export default class Scoreboard extends Component {

  render() {
    return (
      <main className="main">
        <h1  className={`${t.req__heading}`}>Request</h1>
      </main>
    );
  }
}