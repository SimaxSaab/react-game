import React, { Component } from 'react';
import ResCard from './ResCard/ResCard';


import t from './Response.module.css';

export default class Scoreboard extends Component {

  render() {
    const {winner, playerPick} = this.props;
    console.log(winner);
    let winnerCaption;
    if (winner) { 
      winnerCaption = 'You win!';
    } else {
      winnerCaption = 'You lose!';
    }

    return (
      <main className="main">
        <h1  className={`${t.res__heading}`}>{winnerCaption}</h1>
        <ResCard winner={winner} pick={playerPick} />
      </main>
    );
  }
}