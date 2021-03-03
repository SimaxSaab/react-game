import React, { Component } from 'react';

import style from './RecPlayer.module.css';

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
    let targetValue = ev.target.value;
    let valid = this.validateName(targetValue);
    this.setState({
      player: targetValue,
      nameValid: valid
    })
  }

  render() {
    let nameColor = this.state.nameValid === true ? "green" : "red";

    return (
      <>
        <label className="res__player">
          Player:
        <input className={`${style.input}`} type="text" onChange={this.changePlayer} value={this.state.player} style={{borderColor: nameColor}} />
        </label>
        <label className="res__score">
          Score:
          <input className={`${style.input}`} type="text" placeholder={this.props.score} />
        </label>
        <button className="res__add" onClick={ () => { this.props.addToList(this.state.player)}} disabled={!this.state.nameValid}>
          Add to list
        </button>
      </>
    );
  }
}
