import React from 'react';
import Header from '../Header';
import Landingpage from '../Landingpage';
import Footer from '../Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'start',
      level: ''
    }
  }
  
  start = (level) => {
    this.setState({
      gameState: 'end',
      level: level
    })
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Landingpage></Landingpage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
