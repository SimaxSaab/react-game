import React, { useState } from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

import t from './Scoreboard.module.css';

export default function Scoreboard(props) {
  const [isCaption, setCaption] = useState(false);
  const [isSound, setSound] = useState(true);
  let caption, sound;
  if(isCaption) {
    caption = 'Game';
  } else {
    caption = 'Work with score';
  }
  if(isSound) {
    sound = <VolumeUpIcon className={`${t.sb__sound}`} onClick={() => {setSound(false); props.turnIsSound(false)}} />;
  } else {
    sound = <VolumeMuteIcon className={`${t.sb__sound}`} onClick={() => {setSound(true); props.turnIsSound(true)}} />;
  }


  return (
    <header className="App-header">
      <div className={`${t.sb__buttons}`}>
        <button onClick={ (e) => {props.showRes(); setCaption(!isCaption)}}>{caption}</button>
        <button onClick={ (e) => {props.showPopup(); }}>RULES</button>
        {sound}
      </div>
      <h1 className={`${t.sb__heading}`}>Rock Paper Scissors</h1>
      <h3>Score: {props.score}</h3>
    </header>
  );
}