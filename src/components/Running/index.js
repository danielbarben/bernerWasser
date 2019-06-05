import React, {Component} from 'react';
import './Running.css';
import data from '../../data/rivers.js';
import Mapsvg from '../../img/Mapsvg.js'
//import Text from './text.js';

class Running extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: [],
      btn: [{riverId:0, color:'btn grey'}, {riverId:1, color:'btn grey'},{riverId:2, color:'btn grey'},{riverId:3, color:'btn grey'}],
      points: ['point grey', 'point grey', 'point grey', 'point grey', 'point grey'],
      riversToFind: [],
      clickable: true, //Buttons active
      currentRiver:0,//Lösungsnummer der aktuellen Frage, Position in Water
      correct: [],
      wrong: [],
      questionCount: 0,
      message: 'Gleich geht es los!'
    }
  }
  colors = ['#dbede2', '#FFFFFF', '#ffa500', '#009869', '#c13286'] //0: Kantonshintergrund, 1: Wasser neutral, 2: Fluss ausgewählt, 3: grün, 4: rot
  //00a1db

  colorize = () => {
    //Kanton färben
    document.getElementById('Kantonsgrenze').style.fill = this.colors[0];
    //Seen und Flüsse färben
    document.getElementById('Seen').style.fill = this.colors[1];
    document.getElementById('Fluesse').style.stroke = this.colors[1];
    //Schrift anpassen
    //let fontStyle= document.getElementById('Beschriftung')
    //fontStyle.style.fill ="grey"
    //fontStyle.style.fontSize = "1.2em"
  }
  
  //Shuffle Questions
  shuffle(array) {
    let counter = array.length;
    let index;
    let temp;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter = counter - 1;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  end = () => {
      this.props.gameEnding(this.state.correct, this.state.wrong, this.props.gameLevel)
    }
  
  next = () => {
    let newCount = this.state.questionCount + 1;
    let newRiver = this.state.riversToFind[newCount]
    this.setState({
      questionCount: newCount,
      message: 'Wie heisst das orange Gewässer?',
      currentRiver: newRiver,
      clickable: true
    }, function()  {
      this.ask()
    })
  }
  
  wait = (numbers) => {
    let nxt = (this.state.questionCount < 4 ? this.next : this.end);
    setTimeout(function() {
      document.getElementById(data[numbers[0]].id).style.stroke = '#FFFFFF';
      document.getElementById(data[numbers[1]].id).style.stroke = '#FFFFFF';
      nxt();
    }, 3000);
  }

  correct = (rightNumber, wrongNumber, count) => {
    let newBtn = this.state.btn.map(function(item,ignore) {
      return item.riverId === rightNumber ? {riverId: item.riverId, color: 'btn green'} : item
    });
    let newPoints = this.state.points.map(function(item,index) {
      return index === count ? 'point green' : item
    })
    let newCorrect = this.state.correct;
    newCorrect.push(rightNumber);
    this.setState({
      btn: newBtn,
      message: 'Richtig!',
      points: newPoints,
      clickable:false,
      correct: newCorrect
    }, function() {
      //Gewässer grün färben
      document.getElementById(data[rightNumber].id).style.stroke = this.colors[3];
      this.wait([rightNumber, wrongNumber]);
    })
  }

  wrong = (rightNumber,wrongNumber,count) => {
    let newBtn = this.state.btn.map(function(item,index) {
      let newItem = item;
      if (item.riverId === rightNumber) {
        newItem = {riverId: item.riverId, color: 'btn green'}
      }
      if (item.riverId === wrongNumber) {
        newItem = {riverId: item.riverId, color: 'btn red'}
      }
    return newItem
  })
  let newPoints = this.state.points.map(function(item,index) {
    return index === count ? 'point red' : item
  })
  let newWrong = this.state.wrong;
    newWrong.push(wrongNumber);
  this.setState({
    btn: newBtn,
    message: 'Leider falsch.',
    points: newPoints,
    clickable:false,
    wrong: newWrong
  }, function() {
    //Gewässer grün färben
    document.getElementById(data[rightNumber].id).style.stroke = this.colors[3];
    //Gewässer rot färben
    document.getElementById(data[wrongNumber].id).style.stroke = this.colors[4];
    this.wait([rightNumber, wrongNumber]);
  })
}

  verify = (clickedButton) => {
    // richtige Numer
    let rightNumber = this.state.currentRiver;
    let wrongNumber = this.state.btn[clickedButton].riverId;
    let count = this.state.questionCount;
    //gedrückte Nummer ist die richtige Nummer
    if (this.state.btn[clickedButton].riverId === rightNumber) {
      this.correct(rightNumber, wrongNumber,count);
    }
    else {
      this.wrong(rightNumber,wrongNumber,count)
    }
  }

  ask() {
    this.colorize();
    let lg = [];
    //Gewässer blau färben
    document.getElementById(data[this.state.currentRiver].id).style.stroke = this.colors[2];
    //Gewässer mit passender Lösungsgruppe finden
    let currentLg = data[this.state.currentRiver].lg
    data.forEach(function (ignore, i) {
      if (data[i].lg === currentLg) {
        lg.push(i);
      }
    })
    lg = this.shuffle(lg)
    //zufällig drei weitere Gewässer finden
    let collectAnswers = [];
    let helper = [];
    // gesuchte Nummer: this.state.riversToFind[this.state.questionCount])
    helper.push(this.state.riversToFind[this.state.questionCount])
    // gesuchte Nummer als Button speichern
    collectAnswers.push({riverId:this.state.riversToFind[this.state.questionCount], color:'btn grey'});
    // drei weitere Buttons finden
    let i = 0;
    while (collectAnswers.length < 4) {
      let tmpNumber = lg[i];
      if (helper.includes(tmpNumber) === false) {
        helper.push(tmpNumber)
        collectAnswers.push({riverId:tmpNumber, color:'btn grey'})
      };
      i++
    }
    this.shuffle(collectAnswers)
    this.setState({
      btn: collectAnswers
    })
  }

dataTest = () => {
  let color = this.colors[4];
  data.forEach(function (ignore, i) {
    let test = document.getElementById(data[i].id);
    test.style.stroke = color
    })
}

lgTest =() => {
  let lg= [];
  data.forEach(function (ignore, i) {
    if (data[i].lg === 0) {
      lg.push(i);
    }
  })
  for (let i = 0; i < lg.length; i++) {
    console.log(data[lg[i]].id)
    document.getElementById(data[lg[i]].id).style.stroke = this.colors[2];
  };
}

  start = () => {
    let level = this.props.gameLevel;
      let newRivers = [];
      //Gewässer im passenden Level finden
      data.forEach(function (ignore, i) {
        if (data[i].level === level) {
          newRivers.push(i);
        }
      })
      this.shuffle(newRivers);
      this.setState({
        riversToFind: newRivers,
        message: 'Wie heisst das orange Gewässer?',
        currentRiver: newRivers[0]
      }, function() {
        this.ask();
        //this.colorize();
        //this.lgTest();
      })
    }

componentDidMount() {
  this.start()
}
  render() {
    let points = this.state.points.map((item, index) => {
      return <div className={item} key={index}></div>;
    })
    let buttons = this.state.btn.map((item, index) => {
      let buttonText = data[item.riverId].name;
      return <div position={index} id={item.riverId} className={item.color} onClick={()=> this.state.clickable ? this.verify(index) : ''} key={index}>{buttonText}</div>
    })
    return (
      <div className = "Running bgimg gamebox">
        <Mapsvg className = "svgMap"></Mapsvg>
        <div className = "anzeige intro text">{this.state.message}</div>
        <div className = "points text">Punkte: {points}</div>        
        <div className = "btnbar">{buttons}</div>
      </div>
    );
  }
}

export default Running;