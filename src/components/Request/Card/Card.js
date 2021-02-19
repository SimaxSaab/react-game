import React, { Component } from 'react';

import t from './Card.module.css';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {hasClass: true};
    this.clickAnim = this.clickAnim.bind(this);
  }

  clickAnim(event){
    const target = event.currentTarget;
    console.log(target);
    target.style.backgroundColor = 'green';
    target.style.width = '38vmin';
    target.style.height = '38vmin';
    target.style.position = 'absolute';
    target.style.top = '0';
    target.style.transform = 'translateX(-50%)';
    target.style.left = '50%';
    target.style.zIndex = 5;
    target.style.marginTop = '-1vmin';
    target.style.borderRadius = '50%';
    this.setState({
      hasClass: false
    })
  }

  render() {
    const {cardLogo} = this.props;
    const {hasClass} = this.state;

    return (
      <div className={hasClass ? `${t.card} ${t.card_anim}` : `${t.card}`} onClick={this.clickAnim}>
        <img src={cardLogo} className={`${t.card__img}`} alt="Card logo" />
      </div>
    );
  }
}