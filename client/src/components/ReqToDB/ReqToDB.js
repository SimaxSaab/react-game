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
        <div className="res__work">
          <div className="res__row">
            <button onClick={this.rec} className="res__nowrap">Record achievement</button>
            <button onClick={writeToServer} className="res__nowrap">Write to server</button>
          </div>
          {showResult}
          <div className="res__list">
            {
              items.map((item, idx) => (
                <li key={items.length - idx}>
                  {item.name} - {item.score}
                </li>
              ))}
          </div>
        </div>
      </main>
    );
  }
}