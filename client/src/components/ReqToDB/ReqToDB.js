import React, { Component } from 'react';
import RecPlayer from './RecPlayer/RecPlayer';

export default class Scoreboard extends Component {

  constructor() {
    super();

    this.state = {
      rec: false,
      items: []
    }
  }

  rec = () => {
    this.setState({
      rec: !this.state.rec
    })
  }

  render() {
    const {items, score, addToList, writeToServer} = this.props;
    const {rec} = this.state;
    let showResult;
    if(rec) {
      showResult =  <RecPlayer score={score} addToList={addToList} />;
    }

    return (
      <main className="main">
        <h1>List</h1>
        <div className="row">
          <button onClick={this.rec}>Record achievement</button>
          <button onClick={writeToServer}>Write to server</button>
        </div>
        {showResult}

        {
          items.map((item, idx) => (
            <li key={items.length - idx}>
              {item.name} - {item.score}
            </li>
          ))}
      </main>
    );
  }
}