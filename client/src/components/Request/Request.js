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
        <Card  className={`${t.req__heading}`} cardLogo={cardRock} mainLogic={this.props.mainLogic} number="0" />
        <Card  className={`${t.req__heading}`} cardLogo={cardScissors} mainLogic={this.props.mainLogic} number="1" />
        <Card  className={`${t.req__heading}`} cardLogo={cardPaper} mainLogic={this.props.mainLogic} number="2" />
      </main>
    );
  }
}