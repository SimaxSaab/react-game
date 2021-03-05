import React, { Component } from 'react';
import Card from './Card/Card';
import cardRock from '../../img/rock.svg';
import cardScissors from '../../img/scissors.svg';
import cardPaper from '../../img/paper.svg';

import style from './Request.module.css';

export default class Request extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Card  className={`${style.req__heading}`} cardLogo={cardRock} mainLogic={this.props.mainLogic} number="0" isSound={this.props.isSound} />
        <Card  className={`${style.req__heading}`} cardLogo={cardScissors} mainLogic={this.props.mainLogic} number="1" isSound={this.props.isSound} />
        <Card  className={`${style.req__heading}`} cardLogo={cardPaper} mainLogic={this.props.mainLogic} number="2" isSound={this.props.isSound} />
      </main>
    );
  }
}
