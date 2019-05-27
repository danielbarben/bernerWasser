import React, {Component} from 'react';
import './Ending.css';
import data from '../../data/rivers.js';

class End extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
      advice: '',
      button:  <div className='button' onClick = {() => this.props.again('leicht')}>Noch einmal</div>
    }
  }

  getAdvice = () => {
    let newAdvice = '';
    let newLevel = '';
  if (this.props.gameLevel === 'leicht' && this.props.correct.length > 3) {
    newAdvice = 'Schaffst Du auch ein höheres Level?';
    newLevel = 'mittel';
  }
  if (this.props.gameLevel === 'leicht' && this.props.correct.length <= 3) {
    newAdvice = 'Versuchst Du es noch einmal?';
    newLevel = 'leicht';
  }
  if (this.props.gameLevel === 'mittel' && this.props.correct.length > 3) {
    newAdvice = 'Schaffst Du auch ein höheres Level?';
    newLevel = 'schwierig';
  }
  if (this.props.gameLevel === 'mittel' && this.props.correct.length <= 3) {
    newAdvice = 'Versuchen es mit einem einfacheren Level';
    newLevel = 'leicht'
  }
  if (this.props.gameLevel === 'schwierig' && this.props.correct.length > 3) {
    newAdvice = 'Schaffst Du es noch einmal?';
    newLevel = 'schwierig';
  }
  if (this.props.gameLevel === 'schwierig' && this.props.correct.length <= 3) {
    newAdvice = 'Versuch es doch mit einem einfacheren Level';
    newLevel = 'mittel'
  }
  this.setState({
    advice: newAdvice,
    level: newLevel,
    button: <div className='button' onClick = {() => this.props.again(newLevel)}>{newLevel}</div>
  })
}

  getMessage = () => {
    let newMessage = '';
    let newTitle = '';
    let correctTmp = this.props.correct.map(function(index) {return data[index].artikel + ' ' + data[index].name})
    let correctPrint = '';
    if (correctTmp.length > 1) {
      correctPrint = correctTmp.slice(0, -1).join(', ')+' und '+correctTmp.slice(-1);
    }
    else {
      correctPrint = correctTmp[0]
    }
    let wrongTmp = this.props.wrong.map(function(index) {return data[index].artikel + ' ' + data[index].name})
    let wrongPrint = '';
    if (wrongTmp.length > 1) {
      wrongPrint = wrongTmp.slice(0, -1).join(', ')+' und '+wrongTmp.slice(-1);
    }
    else {
      wrongPrint = wrongTmp[0]
    }
    switch (this.props.correct.length) {
      case 5: newTitle = 'Wow, alles richtig!'; newMessage = `Du hast ` + correctPrint + ` richtig erkannt.`; 
      break;
      case 4: newTitle = 'Nicht schlecht!'; newMessage = `Du hast ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.'; 
      break;
      case 3: newTitle = 'Dein Resultat'; newMessage = `Du hast ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.';
      break;
      case 2: newTitle = 'Geht so...'; newMessage = `Du hast ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.';  
      break;
      case 1: newTitle = 'Geht so...'; newMessage = `Du hast ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.'; 
      break;
      case 0: newTitle = 'Das kannst Du besser!'; newMessage = `Du hast ` + wrongPrint + ' nicht erkannt.';  
      break;
      default: newTitle = 'Oops'; newMessage = 'Entschuldigung, da ging etwas schief!';
    }
    this.setState({
      title: newTitle,
      message:newMessage
    })
  }

  componentDidMount() {
    this.getMessage();
    this.getAdvice();
  }
  render() {
    return (
      <div className="Ending">
        <h1>{this.state.title}</h1>
        <div><p>{this.state.message}</p></div>
        <div><p>{this.state.advice}</p></div>
        <div>{this.state.button}</div>
        </div>
    );
  }
}

export default End;