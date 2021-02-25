import React, { Component } from 'react';

import t from './RecPlayer.module.css';

export default class RecPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: '',
      nameValid: false
    }
  }

  validateName(name) {
    return name.length > 2;
  }

  changePlayer = ev => {
    let v = ev.target.value;
    let valid = this.validateName(v);
    this.setState({
      player: v,
      nameValid: valid
    })
  }

  render() {
    let nameColor = this.state.nameValid === true ? "green" : "red";

    return (
      <>
        <label>
          Player:
        <input className={`${t.input}`} type="text" onChange={this.changePlayer} value={this.state.player} style={{borderColor:nameColor}} />
        </label>
        <label>
          Score:
          <input className={`${t.input}`} type="text" placeholder={this.props.score} />
        </label>
        <button onClick={ () => { this.props.addToList(this.state.player)}} disabled={!this.state.nameValid}>
          Add to list
        </button>
      </>
    );
  }
}