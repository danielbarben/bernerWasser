import React, {Component} from 'react';
import ReactGA from 'react-ga';
import './Ending.css';
import data from '../../data/rivers.js';
ReactGA.initialize('UA-141016488-1', {
  debug: true
});
ReactGA.pageview(window.location.pathname + window.location.search);

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
    newAdvice = 'Schaffen Sie auch ein höheres Level?';
    newLevel = 'mittel';
  }
  if (this.props.gameLevel === 'leicht' && this.props.correct.length <= 3) {
    newAdvice = 'Versuchen Sie es noch einmal?';
    newLevel = 'leicht';
  }
  if (this.props.gameLevel === 'mittel' && this.props.correct.length > 3) {
    newAdvice = 'Schaffen Sie auch ein höheres Level?';
    newLevel = 'schwierig';
  }
  if (this.props.gameLevel === 'mittel' && this.props.correct.length <= 3) {
    newAdvice = 'Versuchen Sie es mit einem einfacheren Level.';
    newLevel = 'leicht'
  }
  if (this.props.gameLevel === 'schwierig' && this.props.correct.length > 3) {
    newAdvice = 'Schaffen Sie es noch einmal?';
    newLevel = 'schwierig';
  }
  if (this.props.gameLevel === 'schwierig' && this.props.correct.length <= 3) {
    newAdvice = 'Versuchen Sie es doch mit einem einfacheren Level.';
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
    let correctTmp = this.props.correct.map(function(index) {
      ReactGA.event({
        category: 'evaluation',
        action: 'correct',
        label: data[index].name
      })
      return data[index].artikel + ' ' + data[index].name
    })
    let correctPrint = '';
    if (correctTmp.length > 1) {
      correctPrint = correctTmp.slice(0, -1).join(', ')+' und '+correctTmp.slice(-1);
    }
    else {
      correctPrint = correctTmp[0]
    }
    let wrongTmp = this.props.wrong.map(function(index) {
      ReactGA.event({
        category: 'evaluation',
        action: 'wrong',
        label: data[index].name
      })
      return data[index].artikel + ' ' + data[index].name
    })
    let wrongPrint = '';
    if (wrongTmp.length > 1) {
      wrongPrint = wrongTmp.slice(0, -1).join(', ')+' und '+wrongTmp.slice(-1);
    }
    else {
      wrongPrint = wrongTmp[0]
    }
    switch (this.props.correct.length) {
      case 5: newTitle = 'Wow, alles richtig!'; newMessage = `Sie haben ` + correctPrint + ` richtig erkannt.`; 
      break;
      case 4: newTitle = 'Wow, nicht schlecht!'; newMessage = `Sie haben ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.'; 
      break;
      case 3: newTitle = 'Nicht schlecht!'; newMessage = `Sie haben ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.';
      break;
      case 2: newTitle = 'Du bist auf gutem Weg.'; newMessage = `Sie haben ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.' 
      break;
      case 1: newTitle = 'Komm, das kannst Du besser!'; newMessage = `Sie haben ` + correctPrint + ' richtig erkannt, nicht aber ' + wrongPrint + '.';
      break;
      case 0: newTitle = 'Das kannst Du bestimmt besser!'; newMessage = `Sie haben ` + wrongPrint + ' nicht erkannt.';  
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
      <div className="Ending bgimg gamebox">
        <h3 className="title intro">{this.state.title}</h3>
        <div><p className="text">{this.state.message}</p></div>
        <p/>
        <div><p className="text">{this.state.advice}</p></div>
        <div>{this.state.button}</div>
        <p/>
        <div className='button' onClick = {() => this.props.restart()}>Home</div>
        </div>
    );
  }
}

export default End;