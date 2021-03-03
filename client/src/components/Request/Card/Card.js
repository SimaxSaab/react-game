import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import boom from './bump.mp3';
import click from './click.mp3';

import style from './Card.module.css';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasClass: true,
      playingHover: false,
      playingClick: false,
      playingAnim: true
    };
    this.clickAnim = this.clickAnim.bind(this);
  }
  
  clickAnim(event){
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
    this.setState({
      hasClass: false,
      playingAnim: false
    })
  }

  playHover = () => {
    if(this.props.isSound && this.state.playingAnim) {
      this.setState({
        playingHover: true
      });
    }
  }

  playClick = () => {
    if(this.props.isSound && this.state.playingAnim) {
      this.setState({
        playingClick: true
      });
    }
  }

  render() {
    const {cardLogo, number} = this.props;
    const {hasClass} = this.state; 

    return (
      <>
        <ReactHowler
            src={[boom]}
            playing={this.state.playingHover}
          />
        <ReactHowler
            src={[click]}
            playing={this.state.playingClick}
          />
        <div className={hasClass ? `${style.card} ${style.card_anim}` : `${style.card}`} onMouseOver={this.playHover} onClick={ (e) => {this.clickAnim(e); this.props.mainLogic(number); this.playClick();}
        }>
          <img src={cardLogo} className={`${style.card__img}`} alt="Card logo" />
        </div>
      </>
    );
  }
}

// import useSound from 'use-sound';

// export default function Card(props) {

//   const {cardLogo, number, isSound} = props;

//   const [hasClass, setClass] = useState(true);

//   const clickAnim = (event) => {
//     const target = event.currentTarget;
//     target.style.backgroundColor = 'green';
//     target.style.width = '38vmin';
//     target.style.height = '38vmin';
//     target.style.position = 'absolute';
//     target.style.top = '0';
//     target.style.transform = 'translateX(-50%)';
//     target.style.left = '50%';
//     target.style.zIndex = 5;
//     // target.style.marginTop = '-1vmin';
//     target.style.borderRadius = '50%';
//   }

//   const [play] = useSound(
//     boom,
//     { volume: isSound && 0.25 }
//   );

//   return (
//     <div className={hasClass ? `${t.card} ${t.card_anim}` : `${t.card}`} onMouseOver={play} onClick={ (e) => {clickAnim(e); props.mainLogic(number,props.isSound); setClass(false)}}>
//       <img src={cardLogo} className={`${t.card__img}`} alt="Card logo" />
//       <p>{isSound && 2}</p>
//     </div>
//   );
// }
