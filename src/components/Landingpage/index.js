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
        <p className="text">Haben Sie in der Schule in Geografie eher geschlafen oder wissen Sie richtig gut Bescheid über die Berner Flüsse und Seen?</p>
        <p className="text">Testen Sie Ihr Wissen in unserem Quiz.</p>
        <span className="button intro" onClick = {() => this.props.gameStart('leicht')}>leicht</span><span className="button intro" onClick = {() => this.props.gameStart('mittel')}>mittel</span><span className="button intro" onClick = {() => this.props.gameStart('schwierig')}>schwer</span>
        </div>
    );
  }
}

export default Landingpage;