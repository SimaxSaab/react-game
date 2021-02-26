import React, { useState } from 'react';
import useSound from 'use-sound';
import boom from './bump.mp3';

import t from './Card.module.css';

export default function Card(props) {

  const [hasClass, setClass] = useState(true);

  const clickAnim = (event) => {
    const target = event.currentTarget;
    target.style.backgroundColor = 'green';
    target.style.width = '38vmin';
    target.style.height = '38vmin';
    target.style.position = 'absolute';
    target.style.top = '0';
    target.style.transform = 'translateX(-50%)';
    target.style.left = '50%';
    target.style.zIndex = 5;
    // target.style.marginTop = '-1vmin';
    target.style.borderRadius = '50%';
  }

  const [play] = useSound(
    boom,
    { volume: props.isSound && 0.25 }
  );
  
  const {cardLogo, number} = props;

  return (
    <div className={hasClass ? `${t.card} ${t.card_anim}` : `${t.card}`} onMouseOver={play} onClick={ (e) => {clickAnim(e); props.mainLogic(number,props.isSound); setClass(false)}}>
      <img src={cardLogo} className={`${t.card__img}`} alt="Card logo" />
    </div>
  );
}