import React from 'react';
import Game from '../Game';
import Footer from '../Footer';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';
import './App.css';
import Masthead from '@ta-interaktiv/react-masthead';

function App() {
  return (
    <div className = 'App'>
      <Masthead articleId='18521810' inverted='true'/>
      <Game />
      <Footer />
    </div>
  );
}

export default App;