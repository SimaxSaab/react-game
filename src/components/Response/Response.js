import React, { Component } from 'react';

import t from './Response.module.css';

export default class Scoreboard extends Component {

  render() {
    return (
      <main className="main">
        <h1  className={`${t.res__heading}`}>Response</h1>
      </main>
    );
  }
}