import React, {Component} from 'react';
import './Landingpage.css';

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Landingpage">
        <h1 className="intro">BernerWasser</h1>
        <p>Die Aare kennt jeder. Doch wie sieht es mit den anderen Berner Gewässern aus? Teste Dein Wissen!</p>
        <p>Quiz starten:</p>
        <span className="button intro" onClick = {() => this.props.gameStart('leicht')}>leicht</span><span className="button intro" onClick = {() => this.props.gameStart('mittel')}>mittel</span><span className="button intro" onClick = {() => this.props.gameStart('schwer')}>schwer</span>
        </div>
    );
  }
}

export default Landingpage;