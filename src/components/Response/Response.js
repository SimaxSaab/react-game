import React, { Component } from 'react';
import ResCard from './ResCard/ResCard';


import t from './Response.module.css';

export default class Scoreboard extends Component {

  render() {
    const {winner, playerPick} = this.props;
    // console.log(winner);
    let winnerCaption;
    if (winner) { 
      winnerCaption = 'You win!';
    } else {
      winnerCaption = 'You lose!';
    }

    return (
      <main className="main">
        <h1>{winnerCaption}</h1>
        <div className="horizontal">
          <ResCard winner={winner} pick={playerPick} cardAffiliation={false} />
          <ResCard winner={winner} pick={playerPick} cardAffiliation={true} />
        </div>
        <button className={`${t.res__button}`} onClick={() => this.props.reset()}>Play again</button>
      </main>
    );
  }
}