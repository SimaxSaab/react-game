import React, { useState } from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import useSound from 'use-sound';
import background from './back.mp3';

import style from './Scoreboard.module.css';

export default function Scoreboard(props) {
  const [play, { stop }] = useSound(background, {
    volume: 0.35,
    loop: true,
  });
  const [isCaption, setCaption] = useState(false);
  const [isMelody, setMelody] = useState(false);
  const [isSound, setSound] = useState(true);
  let caption, sound, melody;
  if(isCaption) {
    caption = 'Game';
  } else {
    caption = 'Work with score';
  }
  if(isMelody) {
    melody = <button className={`${style.sb__sound}`} onClick={() => {stop(); setMelody(false)}}>Melody Off</button>;
  } else {
    melody = <button className={`${style.sb__sound}`} onClick={() => {play(); setMelody(true)}}>Melody On</button>;
  }
  if(isSound) {
    sound = <VolumeUpIcon className={`${style.sb__sound}`} onClick={() => {
      setSound(false);
      props.turnIsSound(false)
    }} />;
  } else {
    sound = <VolumeMuteIcon className={`${style.sb__sound}`} onClick={() => {
      setSound(true);
      props.turnIsSound(true)
    }} />;
  }


  return (
    <header className="App-header">
      <div className={`${style.sb__buttons}`}>
        {melody}
        <button onClick={ (e) => {props.showRes(); setCaption(!isCaption)}}>{caption}</button>
        <button onClick={ (e) => {props.showPopup(); }}>RULES</button>
        {sound}
      </div>
      <h1 className={`${style.sb__heading}`}>Rock Paper Scissors</h1>
      <h3>Score: {props.score}</h3>
    </header>
  );
}
