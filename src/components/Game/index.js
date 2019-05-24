import React, { Component } from 'react';
import './Game.css';
import Landingpage from '../Landingpage';
import Running from '../Running';
import End from '../End';

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
    this.setState({
      gameState: 'running',
      level: level
    })
  }

  ending = (correct, wrong) => {
    this.setState({
      gameState: 'ending',
      correct: correct,
      wrong: wrong
    })
  }

  again = (level) => {
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