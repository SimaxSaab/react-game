import React, { Component } from 'react';
import cardRock from '../../../img/rock.svg';
import cardScissors from '../../../img/scissors.svg';
import cardPaper from '../../../img/paper.svg';

import style from './ResCard.module.css';

export default class Card extends Component {

  render() {
    let card = [cardRock, cardScissors, cardPaper], classPick;
    const {pick, winner, cardAffiliation} = this.props;
    switch(winner) {
      case 0: 
            classPick = style.card + ' ' + style.draw;
            break;
      case 1:
            classPick = style.card + ' ' + style.win;
            if(cardAffiliation) {
              classPick = style.card + ' ' + style.lose;
            }
            break;
      case -1:
              classPick = style.card + ' ' + style.lose;
              if(cardAffiliation) {
                classPick = style.card + ' ' + style.win;
              }
    }

    return (
      <div className={classPick}>
        <img src={card[pick]} className={`${style.card__img}`} alt="Card logo" />
      </div>
    );
  }
}
