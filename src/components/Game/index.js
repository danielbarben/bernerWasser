import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './Game.css';
import Landingpage from '../Landingpage';
import Running from '../Running';
import End from '../End';
ReactGA.initialize('UA-141016488-1', {
  debug: true
});
ReactGA.pageview(window.location.pathname + window.location.search);

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'start',
      level: 'leicht',
      wrong: [],
      correct: [ ]
    }
  }
  
  start = (level) => {
    ReactGA.event({
      category: 'button',
      action: 'start game',
      label: level
    })
    this.setState({
      gameState: 'running',
      level: level
    })
  }

  ending = (correct, wrong, level) => {
    ReactGA.event({
      category: 'button',
      action: 'ending game',
      level: level
    })
    this.setState({
      gameState: 'ending',
      correct: correct,
      wrong: wrong
    })
  }

  again = (level) => {
    ReactGA.event({
      category: 'button',
      action: 'restart game',
      level: level
    })
    this.setState({
      gameState: 'running',
      level: level
    })
  }

  render() {
    if (this.state.gameState === 'start') {
      return (
        <Landingpage gameStart = {this.start} ></Landingpage>
      )
    }
    if (this.state.gameState === 'running') {
      return (
        <Running gameLevel = {this.state.level} gameEnding = {this.ending}></Running>
      );
    }
    if (this.state.gameState === 'ending') {
      return (
        <End correct = {this.state.correct} wrong={this.state.wrong} gameLevel = {this.state.level} again = {this.again}></End>
      )
    }
  }
}

export default Game;