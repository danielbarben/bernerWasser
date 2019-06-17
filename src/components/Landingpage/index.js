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
      <div className="Landingpage bgimg gamebox">
        <h2 className="intro title">BernerWasser</h2>
        <p className="subtitle">Das Quiz zur Aareserie</p>
        <p className="text">Wie gut kennen Sie sich mit den Berner Seen und Flüssen aus? Testen Sie Ihr Wissen.</p>
        <p className="text">Quiz starten:</p>
        <span className="button intro" onClick = {() => this.props.gameStart('leicht')}>leicht</span><span className="button intro" onClick = {() => this.props.gameStart('mittel')}>mittel</span><span className="button intro" onClick = {() => this.props.gameStart('schwierig')}>schwer</span>
        </div>
    );
  }
}

export default Landingpage;