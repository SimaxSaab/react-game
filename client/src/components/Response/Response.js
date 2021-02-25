import React, { Component } from 'react';
import ResCard from './ResCard/ResCard';


import t from './Response.module.css';

export default class Scoreboard extends Component {

  render() {
    const {winner, playerPick, computerPick} = this.props;
    let winnerCaption;
    if (winner == 1) { 
      winnerCaption = 'You win!';
    } else if(winner == -1) {
      winnerCaption = 'You lose!';
    } else { winnerCaption = 'It\'s draw'; }

    return (
      <main className="main">
        <h1>{winnerCaption}</h1>
        <div className="horizontal">
          <ResCard winner={winner} pick={playerPick} cardAffiliation={false} />
          <ResCard winner={winner} pick={computerPick} cardAffiliation={true} />
        </div>
        <button className={`${t.res__button}`} onClick={() => this.props.reset()}>Play again</button>
      </main>
    );
  }
}