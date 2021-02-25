import React, { Component } from 'react';
// import ResCard from './ResCard/ResCard';


// import t from './Response.module.css';

export default class Scoreboard extends Component {

  constructor() {
    super();

    this.state = {
      items: []
    }

  }


  request = () => {
    fetch("/select")
      .then(res => res.json())
      .then(
        (result) => {console.log(result);
          this.setState({
            items: result
          });
        }
      )
      console.log(this.state.items);
  }

  render() {
    const {items} = this.state;
    // console.log(winner);

    return (
      <main className="main">
        <h1>List</h1>
        <button onClick={this.request}>Request</button>
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