import React, { Component } from 'react';
import cardRock from '../../../img/rock.svg';
import cardScissors from '../../../img/scissors.svg';
import cardPaper from '../../../img/paper.svg';

import t from './ResCard.module.css';

export default class Card extends Component {

  render() {
    let card = [cardRock, cardScissors, cardPaper], classPick;
    const {pick, winner, cardAffiliation} = this.props;
    console.log(cardAffiliation);
    switch(winner) {
      case 0: 
            classPick = t.card + ' ' + t.draw;
            break;
      case 1:
            classPick = t.card + ' ' + t.win;
            if(cardAffiliation) {
              classPick = t.card + ' ' + t.lose;
            }
            break;
      case -1:
              classPick = t.card + ' ' + t.lose;
              if(cardAffiliation) {
                classPick = t.card + ' ' + t.win;
              }
    }

    return (
      <div className={classPick}>
        <img src={card[pick]} className={`${t.card__img}`} alt="Card logo" />
      </div>
    );
  }
}