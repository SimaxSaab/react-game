import React, { Component } from 'react';
import Card from './Card/Card';
import cardRock from '../../img/rock.svg';
import cardScissors from '../../img/scissors.svg';
import cardPaper from '../../img/paper.svg';

import t from './Request.module.css';

export default class Scoreboard extends Component {

  render() {
    return (
      <main className="main">
        <Card  className={`${t.req__heading}`} cardLogo={cardRock} />
        <Card  className={`${t.req__heading}`} cardLogo={cardScissors} />
        <Card  className={`${t.req__heading}`} cardLogo={cardPaper} />
      </main>
    );
  }
}