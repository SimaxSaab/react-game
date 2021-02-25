import React, { useState } from 'react';

import t from './Scoreboard.module.css';

export default function Scoreboard(props) {
  const [isCaption, setCaption] = useState(false);
  let caption;
  if(isCaption) {
    caption = 'Game';
  } else {
    caption = 'Work with score';
  }
  // render() {
    return (
      <header className="App-header">
        <button onClick={ (e) => {props.showRes(); setCaption(!isCaption)}}>{caption}</button>
        <button onClick={ (e) => {props.showPopup(); }}>RULES</button>
        <h1 className={`${t.sb__heading}`}>Rock Paper Scissors</h1>
        <h3>Score: {props.score}</h3>
      </header>
    );
  // }
}