import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Request from './components/Request/Request';
import Response from './components/Response/Response';
import logo from './img/rs_school_js.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      isRequest: true,
    }

    // this.onInputChanged = this.onInputChanged.bind(this);
  }

  render() {
    const { score } = this.state;
    const isRequest = this.state.isRequest;
    let main;
    if (isRequest) { 
      main = <Request />;
    } else {
      main = <Response />;
    }

    return (
      <div className="App">
        <Scoreboard score={score} />
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
      </div>
    );
  }
}

export default App;
