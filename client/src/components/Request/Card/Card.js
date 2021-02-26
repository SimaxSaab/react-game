import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import boom from './bump.mp3';

import t from './Card.module.css';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasClass: true,
      playing: false,
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

  playSound = () => {
    if(this.props.isSound && this.state.playingAnim) {
      this.setState({
        playing: true
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
            playing={this.state.playing}
          />
        <div className={hasClass ? `${t.card} ${t.card_anim}` : `${t.card}`} onMouseOver={this.playSound} onClick={ (e) => {this.clickAnim(e); this.props.mainLogic(number)}}>
          <img src={cardLogo} className={`${t.card__img}`} alt="Card logo" />
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