import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Request from './components/Request/Request';
import Response from './components/Response/Response';
import ReqToDB from './components/ReqToDB/ReqToDB';
import logo from './img/rs_school_js.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      isWorkWithDB: false,
      hasClassPopup: false,
      isRequest: true,
      winner: 0,
      playerPick: 0,
      computerPick: 0,
    }

  }

  showRes = () => {
    this.setState({
      isWorkWithDB: !this.state.isWorkWithDB
    })
  }

  showPopup = () => {
    this.setState({
      hasClassPopup: true
    })
  }
  
  hidePopup = () => {
    this.setState({
      hasClassPopup: false
    })
  }

  mainLogic = (pick) => {
    let computerPick = Math.floor(Math.random() * 3), winner, score = this.state.score;
    if((pick == 0 && computerPick == 1) || (pick == 1 && computerPick == 2) || (pick == 2 && computerPick == 0)) {
      winner = 1;
    } else if((pick == 0 && computerPick == 0) || (pick == 1 && computerPick == 1) || (pick == 2 && computerPick == 2)) {
      winner = 0;
    } else { winner = -1; }
    score = score + winner;

    setTimeout(
      () => {this.setState({
        isRequest: false,
        playerPick: pick,
        computerPick: computerPick,
        winner: winner,
        score: score
      })},
    4000)
  }
  
  reset = () => {
    this.setState({ isRequest: true, })
  }

  render() {
    const { score, winner, playerPick, computerPick, isRequest, isWorkWithDB, hasClassPopup } = this.state;
    // const isRequest = this.state.isRequest;
    let main;
    if (isWorkWithDB) {
      main = <ReqToDB />;
    } else {
      if (isRequest) { 
        main = <Request mainLogic={this.mainLogic} />;
      } else {
        main = <Response winner={winner} playerPick={playerPick} computerPick={computerPick} reset={this.reset} />;
      }
    }

    return (
      <div className="App">
        <Scoreboard score={score} showRes={this.showRes} showPopup={this.showPopup} />
        { main }
        <footer className="footer">
          <a
            className="App-link"
            href="https://github.com/SimaxSaab"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SimaxSaab, 
          </a>
             <p>&nbsp;2021. Course:&nbsp;</p>
          <a
            className="App-link"
            href="https://rs.school/js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </footer>
        <div className={hasClassPopup ? `modal modal_show` : `modal`}>
          <div className={hasClassPopup ? `popup popup_show` : `popup`} onClick={ (e) => {this.hidePopup(); }}>
            <p>1. Stone beats scissors</p>
            <p>2. Scissors beats paper</p>
            <p>3. Paper beats stone</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
