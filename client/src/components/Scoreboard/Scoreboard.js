import React, { Component } from 'react';

import t from './Scoreboard.module.css';

export default class Scoreboard extends Component {

  render() {
    return (
      <header className="App-header">
        <h1 className={`${t.sb__heading}`}>Rock Paper Scissors</h1>
        <h3>Score: {this.props.score}</h3>
      </header>
    );
  }
}